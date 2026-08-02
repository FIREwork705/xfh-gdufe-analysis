import { useEffect, useRef, useState } from "react";
import type { ProjectItem } from "./Project";

const AUTOPLAY_MS = 6000;

export function ProjectCarousel({
  projects,
  onOpen,
}: {
  projects: ProjectItem[];
  onOpen: (id: string) => void;
}) {
  // 末尾恒定追加一张「施工中」卡（index === projects.length）
  const total = projects.length + 1;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reduced.current || projects.length < 2) return;
    const t = window.setInterval(() => {
      // 自动轮播只在真实项目卡之间循环
      setIndex((i) => (i >= projects.length - 1 ? 0 : i + 1));
    }, AUTOPLAY_MS);
    return () => window.clearInterval(t);
  }, [paused, projects.length, index]);

  const go = (next: number) => setIndex((next + total) % total);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative">
        <div className="overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((p) => (
              <div key={p.id} className="w-full shrink-0 px-0.5">
                <article className="pf-card flex h-[420px] flex-col p-6 sm:h-[380px]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-2">
                    Case study
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.positioning}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-base font-bold text-brand sm:text-lg">{m.value}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-hairline px-3 py-1 text-xs text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-5">
                    <button
                      type="button"
                      onClick={() => onOpen(p.id)}
                      className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
                    >
                      查看完整分析 →
                    </button>
                  </div>
                </article>
              </div>
            ))}

            <div className="w-full shrink-0 px-0.5">
              <div
                aria-label="更多项目施工中"
                className="flex h-[420px] flex-col items-center justify-center rounded-xl border border-dashed border-hairline bg-card/60 p-6 text-center sm:h-[380px]"
              >
                <p className="text-base font-semibold text-muted-foreground/70">施工中…</p>
              </div>
            </div>
          </div>
        </div>

        {total > 1 ? (
          <>
            <button
              type="button"
              aria-label="上一个项目"
              onClick={() => go(index - 1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-hairline bg-card/90 px-3 py-2 text-sm text-muted-foreground shadow-sm transition-colors hover:border-brand/50 hover:text-brand"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="下一个项目"
              onClick={() => go(index + 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-hairline bg-card/90 px-3 py-2 text-sm text-muted-foreground shadow-sm transition-colors hover:border-brand/50 hover:text-brand"
            >
              →
            </button>
          </>
        ) : null}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={i === projects.length ? "施工中卡片" : `第 ${i + 1} 个项目`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-brand" : "w-2 bg-hairline hover:bg-brand/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
