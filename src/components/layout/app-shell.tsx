import Link from "next/link";
import type { ReactNode } from "react";

const nav = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/analytics", label: "Analytics" },
  { href: "/predictions", label: "Predictions" },
  { href: "/recommendations", label: "Recommendations" },
  { href: "/history", label: "History" },
];

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function AppShell({ title, subtitle, children }: Props) {
  return (
    <div className="min-h-screen bg-[var(--td-bg)] text-[var(--td-fg)]">
      <div className="grid-mask">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <header className="flex flex-col gap-6 border-b border-[var(--td-border)] pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--td-muted)]">
                TOODLERSDATA
              </p>
              <h1 className="mt-3 text-3xl">{title}</h1>
              {subtitle ? (
                <p className="mt-2 text-sm text-[var(--td-muted)]">
                  {subtitle}
                </p>
              ) : null}
            </div>
            <nav className="flex flex-wrap gap-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  className="border border-[var(--td-border)] px-4 py-2 text-[10px] uppercase tracking-[0.3em] transition hover:border-[var(--td-accent)]"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          <main className="mt-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
