type Filter = {
  key: string;
  label: string;
  description: string;
};

export const filterPresets: Filter[] = [
  { key: "time:24h", label: "Last 24h", description: "High-resolution view" },
  { key: "time:7d", label: "Last 7d", description: "Weekly trend analysis" },
  { key: "sensor:soil", label: "Soil Only", description: "Moisture + pH + EC" },
  { key: "sensor:climate", label: "Climate", description: "Temp + humidity" },
  { key: "anomaly:true", label: "Anomalies", description: "Only anomalies" },
];
