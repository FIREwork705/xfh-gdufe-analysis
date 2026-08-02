import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

// 纯静态 SPA 构建：产物输出到 dist/，可直接拖到 Netlify Drop / Cloudflare Pages
// 等任意静态托管，再用自定义域名（katyeve.dpdns.org）的 CNAME 指向它。
// 不再依赖 TanStack Start / Nitro / SSR，彻底规避静态构建报错。
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
  },
});
