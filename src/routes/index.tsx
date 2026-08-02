import { createFileRoute } from "@tanstack/react-router";
import { TopNav } from "@/components/portfolio/TopNav";
import { Hero } from "@/components/portfolio/Hero";
import { Project } from "@/components/portfolio/Project";
import { Skills, Methods } from "@/components/portfolio/SkillsMethods";

import { Footer } from "@/components/portfolio/Footer";

const TITLE = "鲜芳慧 | 数据分析求职作品集";
const DESCRIPTION =
  "广东财经大学鲜芳慧的数据分析求职作品集：淘宝用户行为分析项目，涵盖流量时段、转化漏斗、RFM 分层与 Cohort 留存。";

export const Route = createFileRoute("/")({
  prerender: true,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <TopNav />
      <main>
        <Hero />
        <Project />
        <Skills />
        <Methods />
      </main>
      <Footer />
    </div>
  );
}
