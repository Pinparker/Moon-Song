import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/Moon-Song/",
  build: {
    outDir: 'docs', // 打包输出目录(对应page部署文件)
    emptyOutDir: true, // 每次打包前清空 docs 目录
  },
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: "@assets", replacement: resolve(__dirname, "public/assets") },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      { find: "@common", replacement: resolve(__dirname, "src/common") },
      { find: "@groups", replacement: resolve(__dirname, "src/groups") },
    ],
  },
});
