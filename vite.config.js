import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // tell Vite that the root is the current directory
  build: {
    outDir: "dist", // required for Vercel
    emptyOutDir: true,

    assetsInclude: [
      "**/*.jpeg",
      "**/*.jpg",
      "**/*.png",
      "**/*.svg",
      "**/*.gif",
      "**/*.webp",
      "**/*.mp4",
      "**/*.webm",
    ],

    copyPublicDir: true,

    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
