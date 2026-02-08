"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { historyRows } from "@/lib/data/mock";
import { t, type Lang } from "@/lib/i18n";

function download(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export function ExportButtons() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("td_lang") as Lang | null;
    if (saved) setLang(saved);
  }, []);

  const exportJson = () => {
    download(
      "toodlersdata-history.json",
      JSON.stringify(historyRows, null, 2),
      "application/json"
    );
  };

  const exportCsv = () => {
    const header = "date,summary,export";
    const rows = historyRows
      .map((row) => `${row.date},"${row.summary}",${row.export}`)
      .join("\n");
    download("toodlersdata-history.csv", `${header}\n${rows}`, "text/csv");
  };

  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" onClick={exportCsv}>
        {t("label.export", lang)} CSV
      </Button>
      <Button variant="outline" onClick={exportJson}>
        {t("label.export", lang)} JSON
      </Button>
    </div>
  );
}
