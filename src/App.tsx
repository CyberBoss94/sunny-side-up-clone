import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load all page components for better code splitting
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Pricing = lazy(() => import("./pages/Pricing"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const CoverageAreas = lazy(() => import("./pages/CoverageAreas"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ConsentForm = lazy(() => import("./pages/ConsentForm"));
const EmergencyTowing = lazy(() => import("./pages/services/EmergencyTowing"));
const RoadsideAssistance = lazy(() => import("./pages/services/RoadsideAssistance"));
const VehicleRecovery = lazy(() => import("./pages/services/VehicleRecovery"));
const LongDistanceTowing = lazy(() => import("./pages/services/LongDistanceTowing"));
const MotorcycleTowing = lazy(() => import("./pages/services/MotorcycleTowing"));
const SpecializedTowing = lazy(() => import("./pages/services/SpecializedTowing"));
const CommercialTowing = lazy(() => import("./pages/services/CommercialTowing"));
const Toronto = lazy(() => import("./pages/coverage/Toronto"));
const Ottawa = lazy(() => import("./pages/coverage/Ottawa"));
const Hamilton = lazy(() => import("./pages/coverage/Hamilton"));
const London = lazy(() => import("./pages/coverage/London"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/coverage-areas" element={<CoverageAreas />} />
              <Route path="/consent-form" element={<ConsentForm />} />
              <Route path="/services/emergency-towing" element={<EmergencyTowing />} />
              <Route path="/services/roadside-assistance" element={<RoadsideAssistance />} />
              <Route path="/services/vehicle-recovery" element={<VehicleRecovery />} />
              <Route path="/services/long-distance-towing" element={<LongDistanceTowing />} />
              <Route path="/services/motorcycle-towing" element={<MotorcycleTowing />} />
              <Route path="/services/specialized-towing" element={<SpecializedTowing />} />
              <Route path="/services/commercial-towing" element={<CommercialTowing />} />
              <Route path="/coverage/toronto" element={<Toronto />} />
              <Route path="/coverage/ottawa" element={<Ottawa />} />
              <Route path="/coverage/hamilton" element={<Hamilton />} />
              <Route path="/coverage/london" element={<London />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
