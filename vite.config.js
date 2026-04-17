import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  build: {
    rollupOptions: {
      input: "./Fuel security.html",
      output: {
        // CSS goes to dist/ root for easy git file bridge referencing;
        // other assets keep their original subfolder.
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "[name][extname]";
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
