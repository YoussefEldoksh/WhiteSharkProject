import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Vite config
export default defineConfig(({ mode }) => {
  // Start with react plugin
  const plugins = [react()];

  

  return {
    server: {
      host: true,           // allow network access / ngrok
      port: 8080,
      allowedHosts: true,   // allow external hosts
      hmr:{
        overlay:false
      }
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
