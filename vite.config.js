import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  build: {
    rollupOptions: {
      input: "./Fuel security.html",
      output: {
        // Emit the compiled CSS as the well-known alt.css artifact
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "Fuel security_files/alt.css";
          }
          return "Fuel security_files/[name][extname]";
        },
      },
    },
  },
  server: {
    open: "./Fuel security.html",
  },
});
