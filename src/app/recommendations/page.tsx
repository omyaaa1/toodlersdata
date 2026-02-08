import { AppShell } from "@/components/layout/app-shell";
import { Section } from "@/components/ui/section";
import { recommendations } from "@/lib/data/mock";

const cropSuggestions = [
  { crop: "Chickpea", reason: "Soil pH stable, low water demand." },
  { crop: "Millet", reason: "Heat resilient, fits current season." },
  { crop: "Groundnut", reason: "Matches moisture + EC levels." },
];

export default function RecommendationsPage() {
  return (
    <AppShell
      title="Recommendations"
      subtitle="Crop, irrigation, fertilizer, and power-aware guidance."
    >
      <section className="grid gap-6 lg:grid-cols-2">
        <Section title="Smart Actions" subtitle="Prioritized for this week">
          <div className="space-y-4 text-sm">
            {recommendations.map((item) => (
              <div
                key={item.title}
                className="border border-[var(--td-border)] p-4"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--td-muted)]">
                  {item.title}
                </p>
                <p className="mt-2">{item.detail}</p>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Crop Selection" subtitle="Season + soil fit">
          <div className="space-y-4 text-sm">
            {cropSuggestions.map((item) => (
              <div
                key={item.crop}
                className="border border-[var(--td-border)] p-4"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--td-muted)]">
                  {item.crop}
                </p>
                <p className="mt-2">{item.reason}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>
    </AppShell>
  );
}
