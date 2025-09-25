import React from 'react';
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import CoverageAreas from "./pages/CoverageAreas";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import EmergencyTowing from "./pages/services/EmergencyTowing";
import RoadsideAssistance from "./pages/services/RoadsideAssistance";
import VehicleRecovery from "./pages/services/VehicleRecovery";
import LongDistanceTowing from "./pages/services/LongDistanceTowing";
import MotorcycleTowing from "./pages/services/MotorcycleTowing";

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
    component: Services,
    title: 'Towing Services - TowDaddy',
    description: 'Complete towing services across Ontario including emergency towing, roadside assistance, vehicle recovery, and specialized transport services.'
  },
  { 
    path: '/services/emergency-towing', 
    component: EmergencyTowing,
    title: 'Emergency Towing Service - Available 24/7 - TowDaddy',
    description: '24/7 emergency towing service across Ontario. Fast response times, professional drivers, and safe flatbed towing when you need it most.'
  },
  { 
    path: '/services/roadside-assistance', 
    component: RoadsideAssistance,
    title: 'Roadside Assistance - Battery, Tires, Lockouts - TowDaddy',
    description: 'Professional roadside assistance across Ontario. Battery jumps, tire changes, lockout service, and more. Available 24/7 for your peace of mind.'
  },
  { 
    path: '/services/vehicle-recovery', 
    component: VehicleRecovery,
    title: 'Vehicle Recovery Services - Accident & Off-Road - TowDaddy',
    description: 'Professional vehicle recovery services for accidents, off-road situations, and challenging terrain. Safe and careful vehicle extraction across Ontario.'
  },
  { 
    path: '/services/long-distance-towing', 
    component: LongDistanceTowing,
    title: 'Long Distance Towing Across Ontario - TowDaddy',
    description: 'Reliable long-distance towing services across Ontario. Safe transport for your vehicle over extended distances with professional care.'
  },
  { 
    path: '/services/motorcycle-towing', 
    component: MotorcycleTowing,
    title: 'Motorcycle Towing Services - Specialized Transport - TowDaddy',
    description: 'Specialized motorcycle towing services across Ontario. Safe, secure transport for your bike with proper equipment and experienced handling.'
  },
  { 
    path: '/about', 
    component: About,
    title: 'About TowDaddy - Professional Towing Company Ontario',
    description: 'Learn about TowDaddy\'s commitment to professional towing services across Ontario. Licensed, insured, and dedicated to safe vehicle transport.'
  },
  { 
    path: '/coverage-areas', 
    component: CoverageAreas,
    title: 'Coverage Areas - TowDaddy Towing Service Locations',
    description: 'TowDaddy provides towing services across Ontario including Toronto, Scarborough, Thornhill, Vaughan, and surrounding areas.'
  },
  { 
    path: '/pricing', 
    component: Pricing,
    title: 'Towing Service Pricing - Transparent Rates - TowDaddy',
    description: 'Transparent pricing for towing services across Ontario. No hidden fees, competitive rates, and upfront quotes for all towing and roadside assistance.'
  },
  { 
    path: '/faq', 
    component: FAQ,
    title: 'Frequently Asked Questions - TowDaddy Towing',
    description: 'Common questions about our towing services, coverage areas, pricing, and more. Get answers about TowDaddy\'s professional towing services.'
  },
  { 
    path: '/contact', 
    component: Contact,
    title: 'Contact TowDaddy - 24/7 Emergency Towing Service',
    description: 'Contact TowDaddy for emergency towing, roadside assistance, or vehicle recovery. Available 24/7 across Ontario. Call now for immediate service.'
  }
];