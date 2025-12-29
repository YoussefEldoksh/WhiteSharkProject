import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Vite config
export default defineConfig(({ mode }) => {
  // Start with react plugin
  const plugins = [react()];

  // Add componentTagger only in development
  if (mode === "development") {
    plugins.push(componentTagger() as any); // type cast avoids TS error
  }

  return {
    server: {
      host: true,           // allow network access / ngrok
      port: 8080,
      strictPort: true,
      allowedHosts: true,   // allow external hosts
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
