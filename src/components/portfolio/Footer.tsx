import { PROFILE } from "./content";

export function Footer() {
  return (
    <footer className="border-t border-hairline py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">
            {PROFILE.name} · {PROFILE.school}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            求职意向：数据分析 / 用户增长分析
          </p>
        </div>
        <a
          href="#home"
          className="self-start rounded-full border border-hairline px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
        >
          返回顶部
        </a>
      </div>
    </footer>
  );
}
