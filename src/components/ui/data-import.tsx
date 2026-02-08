"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Analysis = {
  rows: number;
  sensors: string[];
  min: Record<string, number>;
  max: Record<string, number>;
  avg: Record<string, number>;
};

function parseCsv(text: string) {
  const lines = text.trim().split(/\r?\n/);
  const headers = lines[0].split(",").map((h) => h.trim());
  const rows = lines.slice(1).map((line) => {
    const values = line.split(",").map((v) => v.trim());
    const row: Record<string, string> = {};
    headers.forEach((h, i) => (row[h] = values[i] ?? ""));
    return row;
  });
  return rows;
}

function analyze(rows: Record<string, string>[]): Analysis {
  if (rows.length === 0) {
    return { rows: 0, sensors: [], min: {}, max: {}, avg: {} };
  }
  const numericKeys = Object.keys(rows[0]).filter((key) =>
    rows.some((row) => !Number.isNaN(Number(row[key])))
  );
  const min: Record<string, number> = {};
  const max: Record<string, number> = {};
  const avg: Record<string, number> = {};

  numericKeys.forEach((key) => {
    const values = rows
      .map((row) => Number(row[key]))
      .filter((value) => !Number.isNaN(value));
    min[key] = Math.min(...values);
    max[key] = Math.max(...values);
    avg[key] = Number(
      (values.reduce((sum, v) => sum + v, 0) / Math.max(values.length, 1)).toFixed(2)
    );
  });

  return { rows: rows.length, sensors: numericKeys, min, max, avg };
}

export function DataImport() {
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [filename, setFilename] = useState<string | null>(null);

  const handleFile = async (file: File) => {
    const text = await file.text();
    let rows: Record<string, string>[] = [];
    if (file.name.endsWith(".json")) {
      const parsed = JSON.parse(text);
      rows = Array.isArray(parsed) ? parsed : parsed.data ?? [];
    } else {
      rows = parseCsv(text);
    }
    setFilename(file.name);
    setAnalysis(analyze(rows));
  };

  return (
    <div className="panel p-5">
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
        Data Import
      </p>
      <p className="mt-3 text-sm text-[var(--td-muted)]">
        Upload CSV/JSON to analyze offline sensor logs.
      </p>
      <div className="mt-4">
        <input
          type="file"
          className="w-full border border-[var(--td-border)] bg-transparent px-3 py-2 text-sm"
          accept=".csv,.json"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) void handleFile(file);
          }}
        />
      </div>
      <div className="mt-4">
        <Button variant="outline">Analyze Import</Button>
      </div>
      {analysis ? (
        <div className="mt-5 space-y-2 border border-[var(--td-border)] p-4 text-sm">
          <div>File: {filename}</div>
          <div>Rows: {analysis.rows}</div>
          <div>Sensors: {analysis.sensors.join(", ")}</div>
          {analysis.sensors.map((key) => (
            <div key={key}>
              {key}: min {analysis.min[key]} / max {analysis.max[key]} / avg{" "}
              {analysis.avg[key]}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
