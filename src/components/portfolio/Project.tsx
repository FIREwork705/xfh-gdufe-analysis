import { useState } from "react";
import { Section } from "./Section";
import { ProjectCarousel } from "./ProjectCarousel";
import { ProjectModal } from "./ProjectModal";

export type ProjectItem = {
  id: string;
  title: string;
  positioning: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  modules: { title: string; desc: string; metric?: string }[];
  contribution: string[];
  charts: { key: string; title: string; note: string; alt: string }[];
  chartsNote: string;
};

// 新增项目时在这里追加一条即可，末尾的「施工中」卡由轮播自动补上。
const projects: ProjectItem[] = [
  {
    id: "taobao",
    title: "淘宝用户行为分析",
    positioning:
      "以真实规模的电商用户行为数据为对象，完成一次从指标定义到运营建议的完整分析。",
    metrics: [
      { value: "100万+", label: "行为数据量级" },
      { value: "5", label: "核心分析模块" },
      { value: "9天", label: "行为观察窗口" },
      { value: "4", label: "可视化图表产出" },
    ],
    stack: ["Python(Pandas)", "SQL", "数据可视化", "分析报告"],
    modules: [
      {
        title: "流量时段分析",
        desc: "按小时、按日拆解活跃与行为量分布，定位高转化时段与流量低谷。",
        metric: "识别 2 个高价值投放时段",
      },
      {
        title: "核心转化漏斗",
        desc: "统一口径构建「浏览 → 收藏/加购 → 下单」漏斗，定位流失最严重的一跳。",
        metric: "定位 1 个关键流失环节",
      },
      {
        title: "RFM 用户分层",
        desc: "以最近购买、频次、活跃度打分分层，输出不同人群的差异化运营动作。",
        metric: "6 类用户分层",
      },
      {
        title: "Cohort 留存",
        desc: "按首次行为日期分群，观察后续留存衰减曲线与拐点。",
        metric: "留存拐点出现在第 2 日",
      },
      {
        title: "品类 Top 分析",
        desc: "统计高曝光与高转化品类，比较「看得多」与「买得多」的差异。",
        metric: "Top 品类贡献显著集中",
      },
    ],
    contribution: [
      "独立完成数据清洗与字段口径定义，处理时间格式、去重与异常行为记录。",
      "设计并实现全部五个分析模块的取数逻辑与可视化图表。",
      "撰写分析结论与运营建议，把每个数据发现对应到一条可执行动作。",
    ],
    charts: [
      { key: "dau", title: "DAU 趋势", note: "日活与新老用户变化趋势", alt: "DAU 趋势图占位图" },
      { key: "funnel", title: "核心转化漏斗", note: "浏览 → 收藏/加购 → 下单", alt: "核心转化漏斗占位图" },
      { key: "rfm", title: "用户分层", note: "RFM 打分与人群划分", alt: "RFM 用户分层占位图" },
      { key: "cohort", title: "Cohort 留存", note: "按首次行为日期分群的留存衰减", alt: "Cohort 留存热力图占位图" },
    ],
    chartsNote:
      "每张图表都对应一份口径说明：数据范围、时间窗口、去重规则与计算方式，确保结论可以被复现与复核。图表结论均在报告中写明对应的运营建议。（当前为占位图，稍后替换为实际图表。）",
  },
];

export function Project() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openProject = projects.find((p) => p.id === openId) ?? null;

  return (
    <Section
      id="project"
      eyebrow="Project"
      title="项目"
      description="左右切换查看项目封面，点击「查看完整分析」在当前页面展开详情。"
    >
      <ProjectCarousel projects={projects} onOpen={setOpenId} />
      {openProject ? (
        <ProjectModal project={openProject} onClose={() => setOpenId(null)} />
      ) : null}
    </Section>
  );
}
