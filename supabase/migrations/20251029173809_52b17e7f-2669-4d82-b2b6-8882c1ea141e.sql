-- Create consent_forms table
CREATE TABLE IF NOT EXISTS public.consent_forms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consent_id TEXT UNIQUE NOT NULL DEFAULT 'TOW-' || LPAD(FLOOR(RANDOM() * 999999 + 1)::TEXT, 6, '0'),
  driver_name TEXT NOT NULL,
  driver_phone TEXT NOT NULL,
  driver_email TEXT NOT NULL,
  service_type TEXT NOT NULL CHECK (service_type IN ('Towing', 'Transport')),
  vehicle_make TEXT NOT NULL,
  vehicle_model TEXT NOT NULL,
  vehicle_year TEXT NOT NULL,
  license_plate TEXT NOT NULL,
  pickup_address TEXT NOT NULL,
  vin_number TEXT NOT NULL,
  destination_address TEXT NOT NULL,
  consenter_first_name TEXT NOT NULL,
  consenter_last_name TEXT NOT NULL,
  terms_accepted BOOLEAN NOT NULL DEFAULT false,
  signature_image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create storage bucket for signatures
INSERT INTO storage.buckets (id, name, public)
VALUES ('consent-signatures', 'consent-signatures', true)
ON CONFLICT (id) DO NOTHING;

-- Enable RLS on consent_forms (public read/insert for customer forms)
ALTER TABLE public.consent_forms ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert consent forms
CREATE POLICY "Anyone can submit consent forms"
  ON public.consent_forms
  FOR INSERT
  WITH CHECK (true);

-- Allow anyone to read their own consent form by consent_id
CREATE POLICY "Anyone can view consent forms"
  ON public.consent_forms
  FOR SELECT
  USING (true);

-- Storage policies for signatures
CREATE POLICY "Anyone can upload signatures"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'consent-signatures');

CREATE POLICY "Signatures are publicly accessible"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'consent-signatures');