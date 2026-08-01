import { PROFILE } from "./content";

function HeroDecoration() {
  return (
    <svg
      viewBox="0 0 400 300"
      role="presentation"
      aria-hidden="true"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="pf-hero-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff5a3c" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffb547" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <g stroke="#efeeec">
        <line x1="40" y1="60" x2="370" y2="60" />
        <line x1="40" y1="120" x2="370" y2="120" />
        <line x1="40" y1="180" x2="370" y2="180" />
        <line x1="40" y1="240" x2="370" y2="240" />
      </g>
      <g fill="url(#pf-hero-grad)" opacity="0.85">
        <rect x="60" y="170" width="26" height="70" rx="6" />
        <rect x="110" y="140" width="26" height="100" rx="6" />
        <rect x="160" y="190" width="26" height="50" rx="6" />
        <rect x="210" y="110" width="26" height="130" rx="6" />
        <rect x="260" y="150" width="26" height="90" rx="6" />
        <rect x="310" y="80" width="26" height="160" rx="6" />
      </g>
      <polyline
        fill="none"
        stroke="#ff5a3c"
        strokeWidth="3"
        strokeLinecap="round"
        points="73,150 123,120 173,165 223,85 273,125 323,55"
      />
      <g fill="#ff5a3c">
        <circle cx="73" cy="150" r="5" />
        <circle cx="123" cy="120" r="5" />
        <circle cx="173" cy="165" r="5" />
        <circle cx="223" cy="85" r="5" />
        <circle cx="273" cy="125" r="5" />
        <circle cx="323" cy="55" r="5" />
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="home" className="scroll-mt-20">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="inline-flex rounded-full border border-hairline bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            {PROFILE.school} · 求职作品集
          </p>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
            <span className="pf-gradient-text">{PROFILE.role}</span>
            <span className="block text-foreground">{PROFILE.tagline}</span>
          </h1>
          <div className="mt-5 space-y-2">
            {PROFILE.intro.map((line) => (
              <p key={line} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {line}
              </p>
            ))}
          </div>
          <p className="mt-6 text-sm font-semibold text-foreground">
            {PROFILE.name} · {PROFILE.school}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {PROFILE.stats.map((s) => (
              <div key={s.label} className="pf-card px-4 py-3">
                <p className="text-xl font-extrabold text-brand sm:text-2xl">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pf-card p-5">
          <HeroDecoration />
        </div>
      </div>
    </section>
  );
}
