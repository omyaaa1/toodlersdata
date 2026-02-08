export const sensorSeries = [
  { time: "05:00", temp: 19, humidity: 62, soil: 38, light: 120 },
  { time: "06:00", temp: 20, humidity: 60, soil: 39, light: 220 },
  { time: "07:00", temp: 22, humidity: 58, soil: 41, light: 360 },
  { time: "08:00", temp: 24, humidity: 55, soil: 44, light: 520 },
  { time: "09:00", temp: 26, humidity: 52, soil: 46, light: 740 },
  { time: "10:00", temp: 28, humidity: 49, soil: 45, light: 880 },
  { time: "11:00", temp: 29, humidity: 48, soil: 44, light: 940 },
  { time: "12:00", temp: 30, humidity: 46, soil: 43, light: 980 },
];

export const sensorDistribution = [
  { label: "0-10%", value: 2 },
  { label: "10-20%", value: 4 },
  { label: "20-30%", value: 7 },
  { label: "30-40%", value: 5 },
  { label: "40-50%", value: 3 },
  { label: "50-60%", value: 2 },
];

export const deviceHealth = [
  { device: "ESP32-Field-01", status: "OK", uptime: "99.4%", battery: "82%" },
  { device: "ESP32-Field-02", status: "WARN", uptime: "95.1%", battery: "54%" },
  { device: "Arduino-Pump-04", status: "OK", uptime: "98.2%", battery: "71%" },
  { device: "ESP32-Greenhouse", status: "OK", uptime: "99.8%", battery: "90%" },
];

export const alerts = [
  { time: "10:21", type: "Anomaly", message: "Soil moisture drop in Plot C" },
  { time: "11:08", type: "Power", message: "Voltage dip detected (Grid)" },
  { time: "11:45", type: "Weather", message: "Rain expected in 6 hours" },
];

export const recommendations = [
  { title: "Plant Rotation", detail: "Rotate to chickpea in Plot A next cycle." },
  { title: "Irrigation", detail: "Reduce watering by 12% for next 48h." },
  { title: "Fertilizer", detail: "Apply NPK 12-32-16 in Plot B." },
];

export const historyRows = [
  {
    date: "2026-02-07",
    summary: "Stable humidity, low wind. Minor voltage drop.",
    export: "CSV",
  },
  {
    date: "2026-02-06",
    summary: "Soil moisture trending down by 6%.",
    export: "JSON",
  },
  {
    date: "2026-02-05",
    summary: "Heat spike detected. Irrigation extended.",
    export: "PDF",
  },
];
