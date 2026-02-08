import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost" | "danger" | "accent";
type Size = "sm" | "md" | "lg";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const variantStyles: Record<Variant, string> = {
  primary:
    "border border-[var(--td-accent)] bg-[var(--td-accent)] text-black hover:translate-y-[-2px]",
  outline:
    "border border-[var(--td-border)] text-[var(--td-fg)] hover:border-[var(--td-accent)]",
  ghost:
    "border border-transparent text-[var(--td-fg)] hover:border-[var(--td-border)]",
  danger:
    "border border-[var(--td-danger)] bg-[var(--td-danger)] text-black",
  accent:
    "border border-[var(--td-accent-2)] bg-[var(--td-accent-2)] text-black",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-2 text-[10px]",
  md: "px-4 py-3 text-xs",
  lg: "px-5 py-3 text-sm",
};

export function Button({
  variant = "outline",
  size = "md",
  className,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center uppercase tracking-[0.3em] transition",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
}
