import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  build: {
    rollupOptions: {
      input: "./Fuel security.html",
    },
  },
  server: {
    open: "./Fuel security.html",
  },
});
