import { AppShell } from "@/components/layout/app-shell";
import { DataTable } from "@/components/ui/data-table";
import { ExportButtons } from "@/components/ui/export-buttons";
import { historyRows } from "@/lib/data/mock";

export default function HistoryPage() {
  return (
    <AppShell
      title="History"
      subtitle="Full data archive, summaries, and export-ready logs."
    >
      <div className="panel p-5">
        <div className="flex items-center justify-between border-b border-[var(--td-border)] pb-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
            Records
          </p>
          <ExportButtons />
        </div>
        <div className="mt-5">
          <DataTable
            columns={[
              { label: "Date", key: "date" },
              { label: "Summary", key: "summary" },
              { label: "Export", key: "export" },
            ]}
            rows={historyRows}
          />
        </div>
      </div>
    </AppShell>
  );
}
