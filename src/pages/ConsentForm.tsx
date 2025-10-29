import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { CheckCircle2, Loader2 } from "lucide-react";
import SEO from "@/components/SEO";
const formSchema = z.object({
  driver_name: z.string().min(1, "Driver name is required"),
  driver_phone: z.string().min(10, "Valid phone number required"),
  driver_email: z.string().email("Valid email required"),
  service_type: z.enum(["Towing", "Transport"]),
  vehicle_make: z.string().min(1, "Vehicle make is required"),
  vehicle_model: z.string().min(1, "Vehicle model is required"),
  vehicle_year: z.string().min(4, "Valid year required"),
  license_plate: z.string().min(1, "License plate is required"),
  pickup_address: z.string().min(1, "Pickup address is required"),
  vin_number: z.string().min(1, "VIN number is required"),
  destination_address: z.string().min(1, "Destination address is required"),
  consenter_first_name: z.string().min(1, "First name is required"),
  consenter_last_name: z.string().min(1, "Last name is required"),
  terms_accepted: z.boolean().refine(val => val === true, "You must accept the terms")
});
type FormData = z.infer<typeof formSchema>;
const ConsentForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [consentId, setConsentId] = useState<string>("");
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasSignature, setHasSignature] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    watch,
    setValue,
    trigger
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service_type: "Towing",
      terms_accepted: false
    }
  });
  const serviceType = watch("service_type");
  const termsAccepted = watch("terms_accepted");

  // Canvas drawing handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;
    ctx.beginPath();
    ctx.moveTo(x, y);
  };
  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;
    ctx.lineTo(x, y);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.stroke();
    setHasSignature(true);
  };
  const stopDrawing = () => {
    setIsDrawing(false);
  };
  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };
  const canProceedToStep2 = () => {
    const step1Fields: (keyof FormData)[] = ["driver_name", "driver_phone", "driver_email", "vehicle_make", "vehicle_model", "vehicle_year", "license_plate", "pickup_address"];
    return step1Fields.every(field => {
      const value = watch(field);
      return value && String(value).trim().length > 0;
    });
  };
  const canProceedToStep3 = () => {
    const step2Fields: (keyof FormData)[] = ["vin_number", "destination_address", "consenter_first_name", "consenter_last_name"];
    return step2Fields.every(field => {
      const value = watch(field);
      return value && String(value).trim().length > 0;
    });
  };
  const canSubmit = () => {
    return termsAccepted && hasSignature;
  };
  const handleNext = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    if (currentStep === 1) {
      fieldsToValidate = ["driver_name", "driver_phone", "driver_email", "service_type", "vehicle_make", "vehicle_model", "vehicle_year", "license_plate", "pickup_address"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["vin_number", "destination_address", "consenter_first_name", "consenter_last_name"];
    }
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep(prev => prev + 1);
    }
  };
  const onSubmit = async (data: FormData) => {
    if (!canSubmit()) {
      toast.error("Please complete all required fields");
      return;
    }
    setIsSubmitting(true);
    try {
      // Convert signature to blob
      const canvas = canvasRef.current;
      if (!canvas) throw new Error("No signature found");
      const blob = await new Promise<Blob>(resolve => {
        canvas.toBlob(blob => {
          if (blob) resolve(blob);
        }, "image/png");
      });

      // Upload signature
      const fileName = `signature-${Date.now()}.png`;
      const {
        data: uploadData,
        error: uploadError
      } = await supabase.storage.from("consent-signatures").upload(fileName, blob);
      if (uploadError) throw uploadError;

      // Get public URL
      const {
        data: {
          publicUrl
        }
      } = supabase.storage.from("consent-signatures").getPublicUrl(fileName);

      // Save form data
      const {
        data: formData,
        error: insertError
      } = await supabase.from("consent_forms").insert([{
        driver_name: data.driver_name,
        driver_phone: data.driver_phone,
        driver_email: data.driver_email,
        service_type: data.service_type,
        vehicle_make: data.vehicle_make,
        vehicle_model: data.vehicle_model,
        vehicle_year: data.vehicle_year,
        license_plate: data.license_plate,
        pickup_address: data.pickup_address,
        vin_number: data.vin_number,
        destination_address: data.destination_address,
        consenter_first_name: data.consenter_first_name,
        consenter_last_name: data.consenter_last_name,
        terms_accepted: data.terms_accepted,
        signature_image_url: publicUrl
      }]).select("consent_id").single();
      if (insertError) throw insertError;
      setConsentId(formData.consent_id);
      setIsSuccess(true);
      toast.success("Consent form submitted successfully!");
      setCurrentStep(4);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isSuccess && currentStep === 4) {
    return <>
        <SEO title="Form Submitted - TowDaddy Consent Form" description="Your towing consent form has been submitted successfully." />
        <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12">
          <div className="container max-w-2xl">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Form Submitted Successfully!</CardTitle>
                <CardDescription>
                  Your consent form has been received and processed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg bg-muted p-4">
                    <p className="text-sm text-muted-foreground">Your Consent ID</p>
                    <p className="text-2xl font-bold text-primary">{consentId}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Please save this ID for your records. You will receive a confirmation email shortly.
                  </p>
                  <Button onClick={() => window.location.href = "/"} className="mt-4">
                    Return to Home
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </>;
  }
  return <>
      <SEO title="Towing Consent Form - TowDaddy" description="Complete your towing service consent form online. Quick and secure digital authorization for your vehicle towing or transport." keywords="towing consent form, vehicle authorization, towing service form, Ontario towing consent" />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12">
        <div className="container max-w-3xl mx-0 px-[8px]">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Towing Consent Form</CardTitle>
              <CardDescription>
                Please complete all steps to authorize towing service
              </CardDescription>
              <div className="mt-4 flex items-center justify-between">
                {[1, 2, 3].map(step => <div key={step} className="flex items-center">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${currentStep >= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                      {step}
                    </div>
                    {step < 3 && <div className={`h-1 w-20 ${currentStep > step ? "bg-primary" : "bg-muted"}`} />}
                  </div>)}
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Step 1: Basic Information */}
                {currentStep === 1 && <div className="space-y-4 grid-cols-2 ">
                    <h3 className="text-xl font-semibold">Step 1: Basic Information</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="driver_name">Driver Name *</Label>
                      <Input id="driver_name" {...register("driver_name")} />
                      {errors.driver_name && <p className="text-sm text-destructive">{errors.driver_name.message}</p>}
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="driver_phone">Phone Number *</Label>
                        <Input id="driver_phone" type="tel" {...register("driver_phone")} />
                        {errors.driver_phone && <p className="text-sm text-destructive">{errors.driver_phone.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="driver_email">Email Address *</Label>
                        <Input id="driver_email" type="email" {...register("driver_email")} />
                        {errors.driver_email && <p className="text-sm text-destructive">{errors.driver_email.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Service Type *</Label>
                      <RadioGroup value={serviceType} onValueChange={val => setValue("service_type", val as "Towing" | "Transport")}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Towing" id="towing" />
                          <Label htmlFor="towing" className="font-normal">Towing</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Transport" id="transport" />
                          <Label htmlFor="transport" className="font-normal">Transport</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="vehicle_make">Make *</Label>
                        <Input id="vehicle_make" {...register("vehicle_make")} placeholder="Toyota" />
                        {errors.vehicle_make && <p className="text-sm text-destructive">{errors.vehicle_make.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="vehicle_model">Model *</Label>
                        <Input id="vehicle_model" {...register("vehicle_model")} placeholder="Camry" />
                        {errors.vehicle_model && <p className="text-sm text-destructive">{errors.vehicle_model.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="vehicle_year">Year *</Label>
                        <Input id="vehicle_year" {...register("vehicle_year")} placeholder="2020" />
                        {errors.vehicle_year && <p className="text-sm text-destructive">{errors.vehicle_year.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="license_plate">License Plate (Ontario) *</Label>
                      <Input id="license_plate" {...register("license_plate")} placeholder="ABCD 123" />
                      {errors.license_plate && <p className="text-sm text-destructive">{errors.license_plate.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pickup_address">Pickup Address *</Label>
                      <Input id="pickup_address" {...register("pickup_address")} placeholder="123 Main St, Toronto, ON" />
                      {errors.pickup_address && <p className="text-sm text-destructive">{errors.pickup_address.message}</p>}
                    </div>

                    <Button type="button" onClick={handleNext} disabled={!canProceedToStep2()} className="w-full">
                      Continue to Step 2
                    </Button>
                  </div>}

                {/* Step 2: Additional Details */}
                {currentStep === 2 && <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Step 2: Additional Details</h3>

                    <div className="space-y-2">
                      <Label htmlFor="vin_number">VIN Number *</Label>
                      <Input id="vin_number" {...register("vin_number")} placeholder="Check vehicle for VIN" />
                      {errors.vin_number && <p className="text-sm text-destructive">{errors.vin_number.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="destination_address">Destination Address *</Label>
                      <Input id="destination_address" {...register("destination_address")} placeholder="Where to take vehicle" />
                      {errors.destination_address && <p className="text-sm text-destructive">{errors.destination_address.message}</p>}
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="consenter_first_name">Consenter First Name *</Label>
                        <Input id="consenter_first_name" {...register("consenter_first_name")} />
                        {errors.consenter_first_name && <p className="text-sm text-destructive">{errors.consenter_first_name.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="consenter_last_name">Consenter Last Name *</Label>
                        <Input id="consenter_last_name" {...register("consenter_last_name")} />
                        {errors.consenter_last_name && <p className="text-sm text-destructive">{errors.consenter_last_name.message}</p>}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button type="button" variant="outline" onClick={() => setCurrentStep(1)}>
                        Back
                      </Button>
                      <Button type="button" onClick={handleNext} disabled={!canProceedToStep3()} className="flex-1">
                        Continue to Step 3
                      </Button>
                    </div>
                  </div>}

                {/* Step 3: Legal Authorization */}
                {currentStep === 3 && <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Step 3: Legal Authorization</h3>

                    <div className="rounded-lg border bg-muted/50 p-4">
                      <h4 className="mb-2 font-semibold">Terms and Conditions</h4>
                      <p className="mb-4 text-sm text-muted-foreground">
                        I authorize TowDaddy to tow or transport my vehicle as described above. I confirm that I am the
                        legal owner or authorized representative of this vehicle. I understand that standard towing rates
                        and terms apply.
                      </p>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="terms" checked={termsAccepted} onCheckedChange={checked => setValue("terms_accepted", checked as boolean)} />
                        <Label htmlFor="terms" className="text-sm font-normal leading-tight">
                          I have read and agree to the terms and conditions *
                        </Label>
                      </div>
                      {errors.terms_accepted && <p className="mt-2 text-sm text-destructive">{errors.terms_accepted.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label>Signature *</Label>
                      <div className="rounded-lg border bg-white p-2">
                        <canvas ref={canvasRef} width={600} height={200} className="w-full touch-none border" onMouseDown={startDrawing} onMouseMove={draw} onMouseUp={stopDrawing} onMouseLeave={stopDrawing} onTouchStart={startDrawing} onTouchMove={draw} onTouchEnd={stopDrawing} />
                        <Button type="button" variant="outline" size="sm" onClick={clearSignature} className="mt-2">
                          Clear Signature
                        </Button>
                      </div>
                      {!hasSignature && <p className="text-sm text-muted-foreground">Please sign above</p>}
                    </div>

                    <div className="flex gap-2">
                      <Button type="button" variant="outline" onClick={() => setCurrentStep(2)}>
                        Back
                      </Button>
                      <Button type="submit" disabled={!canSubmit() || isSubmitting} className="flex-1">
                        {isSubmitting ? <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </> : "Submit Consent Form"}
                      </Button>
                    </div>
                  </div>}
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </>;
};
export default ConsentForm;