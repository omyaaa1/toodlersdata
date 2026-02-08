import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  data: Array<Record<string, string | number>>;
  dataKey: string;
  stroke?: string;
};

export function SensorLineChart({ data, dataKey, stroke }: Props) {
  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="var(--td-muted)" />
          <YAxis stroke="var(--td-muted)" />
          <Tooltip contentStyle={{ background: "#0b0d10", border: "1px solid #1f232a" }} />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={stroke ?? "var(--td-accent)"}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
