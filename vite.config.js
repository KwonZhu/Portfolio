import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // defines the base URL for all assets in the project.
  // The value in base should match the repository name exactly, including case sensitivity
  base: "/Portfolio",
});
