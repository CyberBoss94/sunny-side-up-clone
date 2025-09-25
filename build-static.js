#!/usr/bin/env node
/**
 * Static Site Generation script for Vite + React
 * This script generates SEO-optimized static HTML files for each route
 * Run: npm run build && node build-static.js
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting static site generation...');

// Step 1: Build the Vite app
console.log('📦 Building Vite app...');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Step 2: Generate static pages
console.log('🔧 Generating static HTML pages...');
try {
  execSync('node scripts/generate-ssg.js', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Static generation failed:', error.message);
  process.exit(1);
}

console.log('✅ Static site generation complete!');
console.log('📁 Your static site is ready in the /dist folder');
console.log('🚀 Upload the contents of /dist to your web server');