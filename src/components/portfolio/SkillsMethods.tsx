import { Section } from "./Section";
import { SKILLS, METHODS } from "./content";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="能力"
      description="围绕数据分析岗位常见工作内容整理的能力项。"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s) => (
          <article key={s.title} className="pf-card p-5">
            <span className="inline-flex rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand">
              {s.tag}
            </span>
            <h3 className="mt-3 text-base font-bold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Methods() {
  return (
    <Section
      id="methods"
      eyebrow="Method"
      title="方法"
      description="一套稳定的分析流程，保证结论可复现、可执行。"
    >
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {METHODS.map((m) => (
          <li key={m.step} className="pf-card p-5">
            <span className="text-2xl font-extrabold text-brand">{m.step}</span>
            <h3 className="mt-2 text-base font-bold text-foreground">{m.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
