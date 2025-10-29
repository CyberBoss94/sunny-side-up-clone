import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import CoverageAreas from "./pages/CoverageAreas";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import EmergencyTowing from "./pages/services/EmergencyTowing";
import RoadsideAssistance from "./pages/services/RoadsideAssistance";
import VehicleRecovery from "./pages/services/VehicleRecovery";
import LongDistanceTowing from "./pages/services/LongDistanceTowing";
import MotorcycleTowing from "./pages/services/MotorcycleTowing";
import CommercialTowing from "./pages/services/CommercialTowing";
import SpecializedTowing from "./pages/services/SpecializedTowing";
import Toronto from "./pages/coverage/Toronto";
import Ottawa from "./pages/coverage/Ottawa";
import Hamilton from "./pages/coverage/Hamilton";
import London from "./pages/coverage/London";
import ConsentForm from "./pages/ConsentForm";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

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
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/emergency-towing" element={<EmergencyTowing />} />
          <Route path="/services/roadside-assistance" element={<RoadsideAssistance />} />
          <Route path="/services/vehicle-recovery" element={<VehicleRecovery />} />
          <Route path="/services/long-distance-towing" element={<LongDistanceTowing />} />
          <Route path="/services/motorcycle-towing" element={<MotorcycleTowing />} />
          <Route path="/services/commercial-towing" element={<CommercialTowing />} />
          <Route path="/services/specialized-towing" element={<SpecializedTowing />} />
          <Route path="/about" element={<About />} />
          <Route path="/coverage-areas" element={<CoverageAreas />} />
          <Route path="/coverage/toronto" element={<Toronto />} />
          <Route path="/coverage/ottawa" element={<Ottawa />} />
          <Route path="/coverage/hamilton" element={<Hamilton />} />
          <Route path="/coverage/london" element={<London />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consent-form" element={<ConsentForm />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
