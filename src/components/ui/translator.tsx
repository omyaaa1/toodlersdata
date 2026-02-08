"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { t, type Lang } from "@/lib/i18n";

const glossary: Record<string, { hi: string; mr: string }> = {
  temperature: { hi: "tapman", mr: "tapman" },
  humidity: { hi: "aardrata", mr: "aardrata" },
  soil: { hi: "mitti", mr: "mati" },
  moisture: { hi: "nami", mr: "olava" },
  irrigation: { hi: "sinchai", mr: "sinchan" },
  crop: { hi: "fasal", mr: "pik" },
  fertilizer: { hi: "urvarak", mr: "khat" },
  power: { hi: "bijli", mr: "vij" },
  rain: { hi: "barish", mr: "paus" },
  prediction: { hi: "purvanuman", mr: "andaz" },
};

function translateText(text: string, to: Lang) {
  if (to === "en") return text;
  return text
    .split(" ")
    .map((word) => {
      const key = word.toLowerCase().replace(/[^a-z]/g, "");
      const mapped = glossary[key]?.[to as "hi" | "mr"];
      return mapped ? word.replace(new RegExp(key, "i"), mapped) : word;
    })
    .join(" ");
}

export function Translator() {
  const [from, setFrom] = useState<Lang>("en");
  const [to, setTo] = useState<Lang>("hi");
  const [text, setText] = useState("soil moisture low, increase irrigation");
  const [lang] = useState<Lang>("en");

  const output = useMemo(() => translateText(text, to), [text, to]);

  return (
    <div className="panel p-5">
      <div className="flex items-center justify-between border-b border-[var(--td-border)] pb-4">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
          {t("label.translator", lang)}
        </p>
        <div className="flex gap-2 text-[10px] uppercase tracking-[0.3em] text-[var(--td-muted)]">
          <select
            className="bg-transparent"
            value={from}
            onChange={(event) => setFrom(event.target.value as Lang)}
          >
            <option value="en">EN</option>
            <option value="hi">HI</option>
            <option value="mr">MR</option>
          </select>
          <span>-&gt;</span>
          <select
            className="bg-transparent"
            value={to}
            onChange={(event) => setTo(event.target.value as Lang)}
          >
            <option value="hi">HI</option>
            <option value="mr">MR</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
      <div className="mt-4 grid gap-3">
        <textarea
          className="min-h-[90px] border border-[var(--td-border)] bg-transparent p-3 text-sm outline-none"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <div className="min-h-[90px] border border-[var(--td-border)] bg-[var(--td-bg-2)] p-3 text-sm">
          {output}
        </div>
        <Button variant="outline">Translate</Button>
      </div>
    </div>
  );
}
