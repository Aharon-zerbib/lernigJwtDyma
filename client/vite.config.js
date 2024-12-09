import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // En mode développement, redirige les appels vers le backend local
      "/api": {
        target:
          process.env.NODE_ENV === "production"
            ? "https://ton-backend-en-production.com" // URL de ton API en production
            : "http://localhost:3001", // URL du backend local en développement
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Optionnel : cela supprime '/api' dans le chemin de la requête
      },
    },
  },
  