import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Build de produção: React minificado + JSX pré-compilado.
// Os arquivos estáticos ficam em public/ e são servidos na raiz.
// Os bundles gerados vão para dist/static/ para não colidir com /assets (imagens).
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "static",
  },
});
