import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "vite-plugin-prerender";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    mode === "production" && prerender({
      staticDir: path.join(__dirname, "dist"),
      routes: [
        "/",
        "/services",
        "/services/emergency-towing",
        "/services/roadside-assistance", 
        "/services/vehicle-recovery",
        "/services/long-distance-towing",
        "/services/motorcycle-towing",
        "/about",
        "/coverage-areas", 
        "/pricing",
        "/faq",
        "/contact"
      ],
      renderer: "puppeteer"
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
