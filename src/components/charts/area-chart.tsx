import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  data: Array<Record<string, string | number>>;
  dataKey: string;
};

export function SensorAreaChart({ data, dataKey }: Props) {
  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="time" stroke="var(--td-muted)" />
          <YAxis stroke="var(--td-muted)" />
          <Tooltip contentStyle={{ background: "#0b0d10", border: "1px solid #1f232a" }} />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke="var(--td-accent)"
            fill="rgba(212, 255, 63, 0.15)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
