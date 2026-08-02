// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGhPages = process.env.GH_PAGES === "true";

export default defineConfig({
  // GitHub Pages 是纯静态 host，不能用默认的 Cloudflare SSR preset。
  nitro: {
    preset: isGhPages ? "github_pages" : "cloudflare-module",
  },
  tanstackStart: {
    server: { entry: "server" },
    // 启用静态预渲染，生成真正的 index.html。
    prerender: {
      enabled: isGhPages,
      autoSubfolderIndex: true,
      autoStaticPathsDiscovery: true,
      crawlLinks: true,
    },
  },
  vite: {
    // GitHub Pages 项目页部署在子路径 /xfh-gdufe-analysis/ 下；
    // 仅在该环境变量存在时切换到子路径 base，避免影响 Lovable 预览（base 为 /）。
    base: isGhPages ? "/xfh-gdufe-analysis/" : "/",
  },
});
