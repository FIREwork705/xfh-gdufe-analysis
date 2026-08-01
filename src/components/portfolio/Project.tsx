import { Section } from "./Section";
import { PROJECT } from "./content";

export function Project() {
  return (
    <Section
      id="project"
      eyebrow="Project"
      title={PROJECT.title}
      description={PROJECT.positioning}
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {PROJECT.meta.map((m) => (
          <div key={m.label} className="pf-card px-4 py-4">
            <p className="text-xs text-muted-foreground">{m.label}</p>
            <p className="mt-1 text-sm font-semibold text-foreground">{m.value}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-12 text-lg font-bold text-foreground">分析模块</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECT.modules.map((m, i) => (
          <article key={m.title} className="pf-card flex flex-col p-5">
            <span className="text-xs font-semibold text-brand-2">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="mt-2 text-base font-bold text-foreground">{m.title}</h4>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
            <p className="mt-4 text-sm font-bold text-brand">{m.metric}</p>
          </article>
        ))}
      </div>

      <h3 className="mt-12 text-lg font-bold text-foreground">我的贡献</h3>
      <ul className="mt-4 space-y-3">
        {PROJECT.contribution.map((c) => (
          <li key={c} className="pf-card flex gap-3 p-4 text-sm leading-relaxed text-muted-foreground">
            <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
            <span>{c}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
