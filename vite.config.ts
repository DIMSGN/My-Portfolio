/**
 * VITE CONFIGURATION
 * Build tool settings and production optimizations
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // GitHub Pages base path
  base: "/My-Portfolio/",

  // Path aliases matching tsconfig.json
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@constants": path.resolve(__dirname, "./src/constants"),
    },
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,

    // Minification settings - using esbuild (faster)
    minify: "esbuild",
    
    // Target modern browsers for smaller bundle
    target: "es2020",
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Minify CSS
    cssMinify: true,
  },

  // Development server configuration
  server: {
    port: 3000,
    open: true,
    host: true,
  },

  // Preview server configuration
  preview: {
    port: 4173,
    open: true,
  },
});
