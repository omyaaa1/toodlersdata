"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { t, type Lang } from "@/lib/i18n";

type Message = { role: "user" | "assistant"; text: string };

const canned = [
  {
    q: "Soil moisture dropped quickly",
    a: "Check irrigation valves and confirm pump status. Recalibrate soil sensor if needed.",
  },
  {
    q: "Power outage risk",
    a: "Schedule irrigation during stable grid windows and prioritize solar backup.",
  },
  {
    q: "Which crop to plant next",
    a: "Based on soil + season, consider chickpea or millet for lower water stress.",
  },
];

export function FarmAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Ask me about irrigation, sensors, or crop risk." },
  ]);
  const [input, setInput] = useState("");
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("td_lang") as Lang | null;
    if (saved) setLang(saved);
  }, []);

  const send = () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", text: input };
    const match = canned.find((item) =>
      input.toLowerCase().includes(item.q.toLowerCase().split(" ")[0])
    );
    const reply =
      match?.a ??
      "I can analyze sensor anomalies, irrigation needs, and crop suitability.";
    setMessages((prev) => [...prev, userMessage, { role: "assistant", text: reply }]);
    setInput("");
  };

  return (
    <div className="panel p-5">
      <div className="flex items-center justify-between border-b border-[var(--td-border)] pb-4">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
          {t("label.assistant", lang)}
        </p>
      </div>
      <div className="mt-4 h-40 space-y-3 overflow-auto border border-[var(--td-border)] p-3 text-sm">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.role === "assistant"
                ? "text-[var(--td-accent)]"
                : "text-[var(--td-fg)]"
            }
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        <input
          className="flex-1 border border-[var(--td-border)] bg-transparent px-3 py-2 text-sm outline-none"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask about soil, irrigation, power, crop..."
        />
        <Button variant="primary" onClick={send}>
          Send
        </Button>
      </div>
    </div>
  );
}
