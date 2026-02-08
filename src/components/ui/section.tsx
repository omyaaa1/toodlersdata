import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  title: string;
  subtitle?: string;
  action?: ReactNode;
};

export function Section({ title, subtitle, action, className, children }: Props) {
  return (
    <section className={cn("panel p-5", className)}>
      <div className="flex items-center justify-between border-b border-[var(--td-border)] pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
            {title}
          </p>
          {subtitle ? (
            <p className="mt-2 text-sm text-[var(--td-muted)]">{subtitle}</p>
          ) : null}
        </div>
        {action}
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}
