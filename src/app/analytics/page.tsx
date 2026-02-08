"use client";

import { AppShell } from "@/components/layout/app-shell";
import { Section } from "@/components/ui/section";
import { SensorLineChart } from "@/components/charts/line-chart";
import { SensorBarChart } from "@/components/charts/bar-chart";
import { SensorAreaChart } from "@/components/charts/area-chart";
import { SensorScatterChart } from "@/components/charts/scatter-chart";
import { CorrelationMatrix } from "@/components/charts/correlation-matrix";
import { DistributionChart } from "@/components/charts/distribution";
import { filterPresets } from "@/lib/analytics/filters";
import { detectSimpleAnomalies } from "@/lib/analytics/anomalies";
import { movingAverage, minMaxAvg } from "@/lib/analytics/metrics";
import { sensorSeries, sensorDistribution } from "@/lib/data/mock";

export default function AnalyticsPage() {
  const tempSeries = sensorSeries.map((item) => item.temp);
  const avg = movingAverage(tempSeries, 3);
  const stats = minMaxAvg(tempSeries);
  const latestAvg = avg[avg.length - 1] ?? 0;
  const anomalies = detectSimpleAnomalies(tempSeries);

  return (
    <AppShell
      title="Analytics"
      subtitle="Core sensor intelligence with 10+ views, filters, and anomaly scoring."
    >
      <section className="grid gap-5 lg:grid-cols-4">
        <div className="panel p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
            Temp Min/Max/Avg
          </p>
          <p className="mt-3 text-sm">
            {stats.min}° / {stats.max}° / {stats.avg}°
          </p>
          <p className="mt-2 text-xs text-[var(--td-muted)]">
            Rolling avg: {latestAvg}°
          </p>
        </div>
        <div className="panel p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
            Anomaly Score
          </p>
          <p className="mt-3 text-sm">
            {anomalies.length ? anomalies[0].score : "0.0"}
          </p>
          <p className="mt-2 text-xs text-[var(--td-muted)]">
            {anomalies.length ? anomalies[0].reason : "Stable"}
          </p>
        </div>
        <div className="panel p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
            Confidence
          </p>
          <p className="mt-3 text-sm">92%</p>
          <p className="mt-2 text-xs text-[var(--td-muted)]">
            Data quality high
          </p>
        </div>
        <div className="panel p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
            Filters
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em]">
            {filterPresets.map((preset) => (
              <span
                key={preset.key}
                className="border border-[var(--td-border)] px-2 py-1"
              >
                {preset.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <Section title="Real-time Line" subtitle="Temperature trend">
          <SensorLineChart data={sensorSeries} dataKey="temp" />
        </Section>
        <Section title="Historical Bars" subtitle="Humidity comparison">
          <SensorBarChart data={sensorSeries} dataKey="humidity" />
        </Section>
        <Section title="Trend Area" subtitle="Soil moisture trend">
          <SensorAreaChart data={sensorSeries} dataKey="soil" />
        </Section>
        <Section title="Scatter" subtitle="Temp vs Humidity">
          <SensorScatterChart
            data={sensorSeries.map((item) => ({
              temp: item.temp,
              humidity: item.humidity,
            }))}
          />
        </Section>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Section title="Correlation Matrix" subtitle="Sensor fusion signals">
          <CorrelationMatrix />
        </Section>
        <Section title="Distribution" subtitle="Soil moisture buckets">
          <DistributionChart data={sensorDistribution} />
        </Section>
      </section>
    </AppShell>
  );
}
