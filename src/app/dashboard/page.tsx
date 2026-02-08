import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Stat } from "@/components/ui/stat";
import { FarmAssistant } from "@/components/ui/assistant";
import { DataImport } from "@/components/ui/data-import";
import { alerts, deviceHealth } from "@/lib/data/mock";
import { getMockWeather } from "@/lib/weather";

export default function DashboardPage() {
  const weather = getMockWeather();
  return (
    <AppShell
      title="Dashboard"
      subtitle="Live farm status, alerts, and device health."
    >
      <section className="grid gap-5 lg:grid-cols-3">
        <Stat label="Farm Health Score" value="86" hint="Confidence 92%" />
        <Stat label="Power" value="GRID + SOLAR" hint="Voltage Stable" />
        <Stat label="Weather" value={`${weather.temp}°C`} hint={weather.condition} />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <Card>
          <div className="flex items-center justify-between border-b border-[var(--td-border)] pb-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
              Critical Alerts
            </p>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <div className="mt-5 space-y-4 text-sm">
            {alerts.map((alert) => (
              <div
                key={alert.time}
                className="flex items-start justify-between border border-[var(--td-border)] p-4"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--td-muted)]">
                    {alert.type}
                  </p>
                  <p className="mt-2">{alert.message}</p>
                </div>
                <span className="text-xs text-[var(--td-muted)]">
                  {alert.time}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
            Quick Actions
          </p>
          <div className="mt-5 grid gap-3">
            <Button variant="primary">Sync Devices</Button>
            <Button variant="outline">Export Report</Button>
            <Button variant="outline">Manual Data Entry</Button>
            <Button variant="outline">Calibrate Sensors</Button>
          </div>
        </Card>
      </section>

      <section className="mt-8">
        <Card>
          <div className="flex items-center justify-between border-b border-[var(--td-border)] pb-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
              Device Health
            </p>
            <span className="text-xs text-[var(--td-accent)]">Auto Discovery</span>
          </div>
          <div className="mt-5">
            <DataTable
              columns={[
                { label: "Device", key: "device" },
                { label: "Status", key: "status" },
                { label: "Uptime", key: "uptime" },
                { label: "Battery", key: "battery" },
              ]}
              rows={deviceHealth}
            />
          </div>
        </Card>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <FarmAssistant />
        <DataImport />
      </section>
    </AppShell>
  );
}
