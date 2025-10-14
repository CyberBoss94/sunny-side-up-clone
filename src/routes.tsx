import { lazy, Suspense } from 'react';
import Index from "./pages/Index";

// Lazy load all other pages
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const CoverageAreas = lazy(() => import("./pages/CoverageAreas"));
const Pricing = lazy(() => import("./pages/Pricing"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const EmergencyTowing = lazy(() => import("./pages/services/EmergencyTowing"));
const RoadsideAssistance = lazy(() => import("./pages/services/RoadsideAssistance"));
const VehicleRecovery = lazy(() => import("./pages/services/VehicleRecovery"));
const LongDistanceTowing = lazy(() => import("./pages/services/LongDistanceTowing"));
const MotorcycleTowing = lazy(() => import("./pages/services/MotorcycleTowing"));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

// Wrapper component for lazy-loaded routes
const LazyRoute = ({ Component }: { Component: React.ComponentType }) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

// Route configuration for static generation
export interface RouteConfig {
  path: string;
  component: React.ComponentType;
  title: string;
  description: string;
  keywords?: string;
}

export const routes: RouteConfig[] = [
  { 
    path: '/', 
    component: Index,
    title: 'TowDaddy - 24/7 Towing Across Ontario',
    description: 'Professional 24/7 towing service across Ontario. Safe flatbed towing, emergency roadside assistance, and vehicle recovery. No hooks, just care.'
  },
  { 
    path: '/services', 
    component: () => <LazyRoute Component={Services} />,
    title: 'Towing Services - TowDaddy',
    description: 'Complete towing services across Ontario including emergency towing, roadside assistance, vehicle recovery, and specialized transport services.'
  },
  { 
    path: '/services/emergency-towing', 
    component: () => <LazyRoute Component={EmergencyTowing} />,
    title: 'Emergency Towing Service - Available 24/7 - TowDaddy',
    description: '24/7 emergency towing service across Ontario. Fast response times, professional drivers, and safe flatbed towing when you need it most.'
  },
  { 
    path: '/services/roadside-assistance', 
    component: () => <LazyRoute Component={RoadsideAssistance} />,
    title: 'Roadside Assistance - Battery, Tires, Lockouts - TowDaddy',
    description: 'Professional roadside assistance across Ontario. Battery jumps, tire changes, lockout service, and more. Available 24/7 for your peace of mind.'
  },
  { 
    path: '/services/vehicle-recovery', 
    component: () => <LazyRoute Component={VehicleRecovery} />,
    title: 'Vehicle Recovery Services - Accident & Off-Road - TowDaddy',
    description: 'Professional vehicle recovery services for accidents, off-road situations, and challenging terrain. Safe and careful vehicle extraction across Ontario.'
  },
  { 
    path: '/services/long-distance-towing', 
    component: () => <LazyRoute Component={LongDistanceTowing} />,
    title: 'Long Distance Towing Across Ontario - TowDaddy',
    description: 'Reliable long-distance towing services across Ontario. Safe transport for your vehicle over extended distances with professional care.'
  },
  { 
    path: '/services/motorcycle-towing', 
    component: () => <LazyRoute Component={MotorcycleTowing} />,
    title: 'Motorcycle Towing Services - Specialized Transport - TowDaddy',
    description: 'Specialized motorcycle towing services across Ontario. Safe, secure transport for your bike with proper equipment and experienced handling.'
  },
  { 
    path: '/about', 
    component: () => <LazyRoute Component={About} />,
    title: 'About TowDaddy - Professional Towing Company Ontario',
    description: 'Learn about TowDaddy\'s commitment to professional towing services across Ontario. Licensed, insured, and dedicated to safe vehicle transport.'
  },
  { 
    path: '/coverage-areas', 
    component: () => <LazyRoute Component={CoverageAreas} />,
    title: 'Coverage Areas - TowDaddy Towing Service Locations',
    description: 'TowDaddy provides towing services across Ontario including Toronto, Scarborough, Thornhill, Vaughan, and surrounding areas.'
  },
  { 
    path: '/pricing', 
    component: () => <LazyRoute Component={Pricing} />,
    title: 'Towing Service Pricing - Transparent Rates - TowDaddy',
    description: 'Transparent pricing for towing services across Ontario. No hidden fees, competitive rates, and upfront quotes for all towing and roadside assistance.'
  },
  { 
    path: '/faq', 
    component: () => <LazyRoute Component={FAQ} />,
    title: 'Frequently Asked Questions - TowDaddy Towing',
    description: 'Common questions about our towing services, coverage areas, pricing, and more. Get answers about TowDaddy\'s professional towing services.'
  },
  { 
    path: '/contact', 
    component: () => <LazyRoute Component={Contact} />,
    title: 'Contact TowDaddy - 24/7 Emergency Towing Service',
    description: 'Contact TowDaddy for emergency towing, roadside assistance, or vehicle recovery. Available 24/7 across Ontario. Call now for immediate service.'
  }
];
