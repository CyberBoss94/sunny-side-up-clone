#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define routes for static generation with SEO metadata
const routes = [
  { 
    path: '/', 
    title: 'TowDaddy - 24/7 Towing Across Ontario',
    description: 'Professional 24/7 towing service across Ontario. Safe flatbed towing, emergency roadside assistance, and vehicle recovery. No hooks, just care.',
    keywords: 'towing, roadside assistance, emergency towing, Ontario, flatbed towing, vehicle recovery, 24/7 towing'
  },
  { 
    path: '/services', 
    title: 'Towing Services - TowDaddy',
    description: 'Complete towing services across Ontario including emergency towing, roadside assistance, vehicle recovery, and specialized transport services.',
    keywords: 'towing services, emergency towing, roadside assistance, vehicle recovery, Ontario towing'
  },
  { 
    path: '/services/emergency-towing', 
    title: 'Emergency Towing Service - Available 24/7 - TowDaddy',
    description: '24/7 emergency towing service across Ontario. Fast response times, professional drivers, and safe flatbed towing when you need it most.',
    keywords: 'emergency towing, 24/7 towing, flatbed towing, Ontario emergency towing, roadside emergency'
  },
  { 
    path: '/services/roadside-assistance', 
    title: 'Roadside Assistance - Battery, Tires, Lockouts - TowDaddy',
    description: 'Professional roadside assistance across Ontario. Battery jumps, tire changes, lockout service, and more. Available 24/7 for your peace of mind.',
    keywords: 'roadside assistance, battery jump, tire change, lockout service, Ontario roadside help'
  },
  { 
    path: '/services/vehicle-recovery', 
    title: 'Vehicle Recovery Services - Accident & Off-Road - TowDaddy',
    description: 'Professional vehicle recovery services for accidents, off-road situations, and challenging terrain. Safe and careful vehicle extraction across Ontario.',
    keywords: 'vehicle recovery, accident recovery, off-road recovery, vehicle extraction, Ontario recovery'
  },
  { 
    path: '/services/long-distance-towing', 
    title: 'Long Distance Towing Across Ontario - TowDaddy',
    description: 'Reliable long-distance towing services across Ontario. Safe transport for your vehicle over extended distances with professional care.',
    keywords: 'long distance towing, Ontario long distance, vehicle transport, extended towing'
  },
  { 
    path: '/services/motorcycle-towing', 
    title: 'Motorcycle Towing Services - Specialized Transport - TowDaddy',
    description: 'Specialized motorcycle towing services across Ontario. Safe, secure transport for your bike with proper equipment and experienced handling.',
    keywords: 'motorcycle towing, bike towing, motorcycle transport, Ontario motorcycle towing'
  },
  { 
    path: '/about', 
    title: 'About TowDaddy - Professional Towing Company Ontario',
    description: 'Learn about TowDaddy\'s commitment to professional towing services across Ontario. Licensed, insured, and dedicated to safe vehicle transport.',
    keywords: 'about TowDaddy, professional towing company, Ontario towing company, licensed towing'
  },
  { 
    path: '/coverage-areas', 
    title: 'Coverage Areas - TowDaddy Towing Service Locations',
    description: 'TowDaddy provides towing services across Ontario including Toronto, Scarborough, Thornhill, Vaughan, and surrounding areas.',
    keywords: 'towing coverage areas, Toronto towing, Scarborough towing, Thornhill towing, Vaughan towing, Ontario coverage'
  },
  { 
    path: '/pricing', 
    title: 'Towing Service Pricing - Transparent Rates - TowDaddy',
    description: 'Transparent pricing for towing services across Ontario. No hidden fees, competitive rates, and upfront quotes for all towing and roadside assistance.',
    keywords: 'towing prices, towing rates, Ontario towing cost, transparent pricing, towing quotes'
  },
  { 
    path: '/faq', 
    title: 'Frequently Asked Questions - TowDaddy Towing',
    description: 'Common questions about our towing services, coverage areas, pricing, and more. Get answers about TowDaddy\'s professional towing services.',
    keywords: 'towing FAQ, towing questions, TowDaddy questions, Ontario towing help'
  },
  { 
    path: '/contact', 
    title: 'Contact TowDaddy - 24/7 Emergency Towing Service',
    description: 'Contact TowDaddy for emergency towing, roadside assistance, or vehicle recovery. Available 24/7 across Ontario. Call now for immediate service.',
    keywords: 'contact TowDaddy, emergency towing contact, Ontario towing phone, 24/7 towing contact'
  }
];

// Generate HTML by modifying the built index.html
const generateHTML = (route, baseHtml) => {
  let html = baseHtml;
  
  // Replace title
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  
  // Replace/add meta description
  if (html.includes('<meta name="description"')) {
    html = html.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${route.description}">`);
  } else {
    html = html.replace('<meta name="viewport"', `<meta name="description" content="${route.description}">\n    <meta name="viewport"`);
  }
  
  // Add keywords meta tag
  html = html.replace('<meta name="description"', `<meta name="keywords" content="${route.keywords}">\n    <meta name="description"`);
  
  // Add Open Graph tags
  const ogTags = `
    <!-- Open Graph Tags -->
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://towdaddy.ca${route.path}" />
    <meta property="og:image" content="https://towdaddy.ca/assets/towdaddy-logo.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="TowDaddy" />
    <meta property="og:locale" content="en_CA" />
    
    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="https://towdaddy.ca/assets/towdaddy-logo.png" />
    <meta name="twitter:site" content="@towdaddy" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://towdaddy.ca${route.path}" />`;
  
  // Insert OG tags before closing head tag
  html = html.replace('</head>', `${ogTags}\n</head>`);
  
  return html;
};

// Generate static pages
const generateStaticPages = async () => {
  const distDir = path.join(__dirname, '..', 'dist');
  
  // Read the base HTML file generated by Vite build
  const baseHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(baseHtmlPath)) {
    console.error('❌ Base index.html not found. Make sure to run "vite build" first.');
    process.exit(1);
  }
  
  const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');
  
  // Generate pages
  for (const route of routes) {
    const routePath = route.path === '/' ? '' : route.path;
    const targetDir = path.join(distDir, routePath);
    
    // Create directory structure
    if (routePath) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // Generate HTML content using the built template
    const htmlContent = generateHTML(route, baseHtml);
    const filePath = path.join(targetDir, 'index.html');
    
    fs.writeFileSync(filePath, htmlContent);
    console.log(`Generated: ${filePath}`);
  }
  
  console.log('✅ Static pages generated successfully!');
  console.log('📁 Upload the contents of the /dist folder to your Hostinger public_html directory');
};

// Run generation
generateStaticPages().catch(console.error);