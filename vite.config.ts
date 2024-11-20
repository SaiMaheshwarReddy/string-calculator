/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/string-calculator/",
  build: {
    outDir: "./dist",
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"), // Explicitly tell Vite to use your index.html as the entry point
    },
  },
  test: {
    watch: false,
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@@", replacement: path.resolve(__dirname) },
    ],
  },
});
