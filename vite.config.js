import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  build: {
    rollupOptions: {
      input: "./Fuel security.html",
      output: {
        // JS chunks go to Fuel security_files/ to match the existing asset layout.
        entryFileNames: "Fuel security_files/[name].js",
        chunkFileNames: "Fuel security_files/[name].js",
        // CSS goes to dist/ root for easy git file bridge referencing;
        // other assets keep their original subfolder.
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "print.css") {
            return "[name][extname]";
          }
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "theme.css";
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
