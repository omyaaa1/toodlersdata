type Bucket = {
  label: string;
  value: number;
};

type Props = {
  data: Bucket[];
};

export function DistributionChart({ data }: Props) {
  const max = Math.max(...data.map((item) => item.value), 1);
  return (
    <div className="space-y-3">
      {data.map((item) => (
        <div key={item.label} className="space-y-1">
          <div className="flex items-center justify-between text-xs text-[var(--td-muted)]">
            <span>{item.label}</span>
            <span>{item.value}</span>
          </div>
          <div className="h-2 border border-[var(--td-border)]">
            <div
              className="h-full bg-[var(--td-accent)]"
              style={{ width: `${(item.value / max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
