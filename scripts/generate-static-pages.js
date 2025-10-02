#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all routes that need static HTML files
const routes = [
  '/',
  '/services',
  '/services/emergency-towing',
  '/services/roadside-assistance', 
  '/services/vehicle-recovery',
  '/services/long-distance-towing',
  '/services/motorcycle-towing',
  '/services/commercial-towing',
  '/services/specialized-towing',
  '/about',
  '/coverage-areas',
  '/coverage/toronto',
  '/coverage/ottawa',
  '/coverage/hamilton',
  '/coverage/london',
  '/pricing',
  '/faq',
  '/contact'
];

// Read the base HTML template
const baseHtmlPath = path.join(__dirname, '..', 'dist', 'index.html');
const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

// Create directory structure and HTML files for each route
routes.forEach(route => {
  if (route === '/') {
    // Root route uses the existing index.html
    return;
  }

  const routePath = route.slice(1); // Remove leading slash
  const dirs = routePath.split('/');
  
  // Create nested directories
  let currentPath = path.join(__dirname, '..', 'dist');
  dirs.forEach(dir => {
    currentPath = path.join(currentPath, dir);
    if (!fs.existsSync(currentPath)) {
      fs.mkdirSync(currentPath, { recursive: true });
    }
  });

  // Write index.html file for this route
  const htmlFilePath = path.join(currentPath, 'index.html');
  fs.writeFileSync(htmlFilePath, baseHtml);
  
  console.log(`Generated: ${htmlFilePath}`);
});

console.log('Static pages generated successfully!');