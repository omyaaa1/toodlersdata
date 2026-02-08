import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  data: Array<Record<string, string | number>>;
  dataKey: string;
};

export function SensorBarChart({ data, dataKey }: Props) {
  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="time" stroke="var(--td-muted)" />
          <YAxis stroke="var(--td-muted)" />
          <Tooltip contentStyle={{ background: "#0b0d10", border: "1px solid #1f232a" }} />
          <Bar dataKey={dataKey} fill="var(--td-accent-2)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
