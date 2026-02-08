type Props = {
  label: string;
  value: string;
  hint?: string;
};

export function Stat({ label, value, hint }: Props) {
  return (
    <div className="panel p-4">
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
        {label}
      </p>
      <p className="mt-3 text-2xl">{value}</p>
      {hint ? <p className="mt-2 text-xs text-[var(--td-muted)]">{hint}</p> : null}
    </div>
  );
}
