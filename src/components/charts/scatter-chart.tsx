import {
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Point = { temp: number; humidity: number };

type Props = {
  data: Point[];
};

export function SensorScatterChart({ data }: Props) {
  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart>
          <XAxis type="number" dataKey="temp" name="Temp" stroke="var(--td-muted)" />
          <YAxis type="number" dataKey="humidity" name="Humidity" stroke="var(--td-muted)" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter data={data} fill="var(--td-accent)" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
