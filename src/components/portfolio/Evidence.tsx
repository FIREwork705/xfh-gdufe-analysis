import { Section } from "./Section";
import dauChart from "@/assets/placeholder-dau.svg";
import funnelChart from "@/assets/placeholder-funnel.svg";
import rfmChart from "@/assets/placeholder-rfm.svg";
import cohortChart from "@/assets/placeholder-cohort.svg";

// 替换占位图：把下面的 src 换成你自己的本地图片即可（DAU.png / 漏斗 / 分层 / Cohort）。
const CHARTS = [
  { src: dauChart, title: "DAU 趋势", note: "日活与新老用户变化趋势", alt: "DAU 趋势图占位图" },
  { src: funnelChart, title: "核心转化漏斗", note: "浏览 → 收藏/加购 → 下单", alt: "核心转化漏斗占位图" },
  { src: rfmChart, title: "用户分层", note: "RFM 打分与人群划分", alt: "RFM 用户分层占位图" },
  { src: cohortChart, title: "Cohort 留存", note: "按首次行为日期分群的留存衰减", alt: "Cohort 留存热力图占位图" },
];

export function Evidence() {
  return (
    <Section
      id="evidence"
      eyebrow="Evidence"
      title="证据"
      description="分析过程中产出的核心图表（当前为占位图，稍后替换为实际图表）。"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {CHARTS.map((c) => (
          <figure key={c.title} className="pf-card overflow-hidden">
            <img
              src={c.src}
              alt={c.alt}
              loading="lazy"
              className="w-full border-b border-hairline bg-card object-cover"
            />
            <figcaption className="p-4">
              <h3 className="text-sm font-bold text-foreground">{c.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.note}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="pf-card mt-5 p-5">
        <h3 className="text-sm font-bold text-foreground">报告说明</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          每张图表都对应一份口径说明：数据范围、时间窗口、去重规则与计算方式，
          确保结论可以被复现与复核。图表结论均在报告中写明对应的运营建议。
        </p>
      </div>
    </Section>
  );
}
