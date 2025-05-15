// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  base: "/", // important for subdomain or root hosting
  build: {
    outDir: "dist",
  },
});
