import Link from "next/link";

const features = [
  "Real-time ingestion from Arduino + ESP32",
  "10+ analytics views with anomaly detection",
  "Prediction engine for temperature, moisture, and yield risk",
  "Weather-aware recommendations and power status",
  "Multi-farm, multi-device, offline buffering",
  "Sharp-edged, 90% black, data-first UI",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--td-bg)] text-[var(--td-fg)]">
      <div className="grid-mask">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <header className="flex items-center justify-between border-b border-[var(--td-border)] pb-6">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 bg-[var(--td-accent)]" />
              <span className="text-lg tracking-[0.2em]">TOODLERSDATA</span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                className="border border-[var(--td-border)] px-4 py-2 text-xs uppercase tracking-[0.3em] transition hover:border-[var(--td-accent)]"
                href="/login"
              >
                Login
              </Link>
              <Link
                className="border border-[var(--td-accent)] bg-[var(--td-accent)] px-4 py-2 text-xs uppercase tracking-[0.3em] text-black transition hover:translate-y-[-2px]"
                href="/dashboard"
              >
                Enter Console
              </Link>
            </div>
          </header>

          <main className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="space-y-8">
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--td-muted)]">
                Data → Insight → Prediction → Action
              </p>
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                A decision engine for farms powered by live sensor intelligence.
              </h1>
              <p className="max-w-xl text-sm text-[var(--td-muted)] md:text-base">
                toodlersdata turns raw hardware signals into immediate, reliable
                actions. Monitor every field, predict risks early, and optimize
                resources with precision-grade analytics.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  className="border border-[var(--td-accent)] bg-[var(--td-accent)] px-5 py-3 text-xs uppercase tracking-[0.3em] text-black transition hover:translate-y-[-2px]"
                  href="/dashboard"
                >
                  Launch Dashboard
                </Link>
                <Link
                  className="border border-[var(--td-border)] px-5 py-3 text-xs uppercase tracking-[0.3em] transition hover:border-[var(--td-accent)]"
                  href="/analytics"
                >
                  Explore Analytics
                </Link>
              </div>
              <div className="grid gap-3 text-xs text-[var(--td-muted)]">
                <div>Latency &lt; 2s · Offline buffer sync · Secure ingestion</div>
                <div>Device health, calibration, and anomaly scoring included</div>
              </div>
            </section>

            <section className="panel p-6">
              <div className="flex items-center justify-between border-b border-[var(--td-border)] pb-4">
                <span className="text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
                  Core Capabilities
                </span>
                <span className="text-xs text-[var(--td-accent)]">LIVE</span>
              </div>
              <ul className="mt-6 space-y-4 text-sm">
                {features.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-[var(--td-border)] pb-3"
                  >
                    <span className="mt-1 h-2 w-2 bg-[var(--td-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </main>

          <section className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              ["Farm Health Score", "86", "Confidence 92%"],
              ["Power Stability", "GRID+SOLAR", "Voltage OK"],
              ["Weather Impact", "LOW", "Rain in 6h"],
            ].map(([title, value, meta]) => (
              <div key={title} className="panel p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
                  {title}
                </p>
                <p className="mt-3 text-3xl">{value}</p>
                <p className="mt-2 text-xs text-[var(--td-muted)]">{meta}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
