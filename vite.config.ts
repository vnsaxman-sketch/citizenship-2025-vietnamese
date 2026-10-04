import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base:
    process.env.NODE_ENV === "production"
      ? "/citizenship-2025-vietnamese/"
      : "/",
  plugins: [react()],
});
