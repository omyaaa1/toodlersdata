import { AppShell } from "@/components/layout/app-shell";
import { Section } from "@/components/ui/section";
import { defaultForecast } from "@/lib/predictions/models";
import { cropStressIndex, irrigationNeedScore } from "@/lib/predictions/rules";

export default function PredictionsPage() {
  const irrigationScore = irrigationNeedScore({
    temp: 30,
    humidity: 46,
    soilMoisture: 34,
    rainChance: 35,
    powerStable: true,
  });
  const stressScore = cropStressIndex({
    temp: 31,
    humidity: 45,
    soilMoisture: 32,
    rainChance: 25,
    powerStable: true,
  });

  return (
    <AppShell
      title="Predictions"
      subtitle="Rule-based forecasts, ML-ready architecture."
    >
      <section className="grid gap-5 lg:grid-cols-3">
        <div className="panel p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
            Irrigation Need
          </p>
          <p className="mt-3 text-3xl">{irrigationScore}%</p>
          <p className="mt-2 text-xs text-[var(--td-muted)]">
            Based on soil + weather + power
          </p>
        </div>
        <div className="panel p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
            Crop Stress
          </p>
          <p className="mt-3 text-3xl">{stressScore}%</p>
          <p className="mt-2 text-xs text-[var(--td-muted)]">
            Heat + humidity risk
          </p>
        </div>
        <div className="panel p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
            Yield Risk
          </p>
          <p className="mt-3 text-3xl">LOW</p>
          <p className="mt-2 text-xs text-[var(--td-muted)]">
            No anomalies detected
          </p>
        </div>
      </section>

      <section className="mt-8">
        <Section title="Forecast Horizon" subtitle="Temp · Humidity · Soil">
          <div className="grid gap-4 md:grid-cols-4">
            {defaultForecast.map((forecast) => (
              <div key={forecast.horizon} className="panel p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
                  {forecast.horizon}
                </p>
                <p className="mt-3 text-sm">
                  {forecast.temp}°C · {forecast.humidity}% · {forecast.soil}%
                </p>
                <p className="mt-2 text-xs text-[var(--td-muted)]">
                  Confidence {(forecast.confidence * 100).toFixed(0)}%
                </p>
              </div>
            ))}
          </div>
        </Section>
      </section>
    </AppShell>
  );
}
