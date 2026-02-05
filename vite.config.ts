import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // si React

export default defineConfig({
  plugins: [react()],
  base: "/luluxyz1.github.io/", // ← Ajoute ça (remplace par le nom exact de ton repo GitHub)
});
