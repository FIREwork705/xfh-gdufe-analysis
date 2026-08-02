import { useEffect, useRef } from "react";
import type { ProjectItem } from "./Project";
import dauChart from "@/assets/DAU.png";
import funnelChart from "@/assets/Counts_of_behaviors.png";
import rfmChart from "@/assets/frequency.png";
import cohortChart from "@/assets/hourly_avg_behaviors.png";

const CHART_SRC: Record<string, string> = {
  dau: dauChart,
  funnel: funnelChart,
  rfm: rfmChart,
  cohort: cohortChart,
};

export function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectItem;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-foreground/40 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} 完整分析`}
        tabIndex={-1}
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-hairline bg-card shadow-2xl outline-none sm:max-h-[85vh] sm:rounded-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-hairline px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Project detail
            </p>
            <h2 className="mt-1 text-lg font-bold tracking-tight text-foreground">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="关闭详情"
            className="shrink-0 rounded-full border border-hairline px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
          >
            关闭
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6">
          <section>
            <h3 className="text-sm font-bold text-foreground">概览</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.positioning}
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.metrics.map((m) => (
                <div key={m.label} className="rounded-xl border border-hairline px-4 py-3">
                  <p className="text-lg font-bold text-brand">{m.value}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-hairline px-3 py-1 text-xs text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h3 className="text-sm font-bold text-foreground">分析模块</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.modules.map((m, i) => (
                <article key={m.title} className="pf-card p-4">
                  <span className="text-xs font-semibold text-brand-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-1 text-sm font-bold text-foreground">{m.title}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {m.desc}
                  </p>
                  {m.metric ? (
                    <p className="mt-3 text-xs font-bold text-brand">{m.metric}</p>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h3 className="text-sm font-bold text-foreground">我的贡献</h3>
            <ul className="mt-4 space-y-3">
              {project.contribution.map((c) => (
                <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h3 className="text-sm font-bold text-foreground">证据图表</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {project.charts.map((c) => (
                <figure key={c.key} className="pf-card overflow-hidden">
                  <img
                    src={CHART_SRC[c.key]}
                    alt={c.alt}
                    loading="lazy"
                    className="w-full border-b border-hairline bg-card object-cover"
                  />
                  <figcaption className="p-4">
                    <h4 className="text-sm font-bold text-foreground">{c.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{c.note}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="pf-card mt-4 p-5">
              <h4 className="text-sm font-bold text-foreground">报告说明</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.chartsNote}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
