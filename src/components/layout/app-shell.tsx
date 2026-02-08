"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { t, type Lang } from "@/lib/i18n";

const nav = [
  { href: "/dashboard", key: "nav.dashboard" },
  { href: "/analytics", key: "nav.analytics" },
  { href: "/predictions", key: "nav.predictions" },
  { href: "/recommendations", key: "nav.recommendations" },
  { href: "/history", key: "nav.history" },
];

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function AppShell({ title, subtitle, children }: Props) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("td_lang") as Lang | null;
    if (saved) setLang(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("td_lang", lang);
  }, [lang]);

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
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 border border-[var(--td-border)] px-3 py-2 text-[10px] uppercase tracking-[0.3em]">
                <span className="text-[var(--td-muted)]">
                  {t("label.language", lang)}
                </span>
                <select
                  className="bg-transparent text-[var(--td-fg)] outline-none"
                  value={lang}
                  onChange={(event) => setLang(event.target.value as Lang)}
                >
                  <option value="en">EN</option>
                  <option value="hi">HI</option>
                  <option value="mr">MR</option>
                </select>
              </div>
              <nav className="flex flex-wrap gap-3">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    className="border border-[var(--td-border)] px-4 py-2 text-[10px] uppercase tracking-[0.3em] transition hover:border-[var(--td-accent)]"
                    href={item.href}
                  >
                    {t(item.key, lang)}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          <main className="mt-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
