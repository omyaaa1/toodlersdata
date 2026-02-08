export type Forecast = {
  horizon: string;
  temp: number;
  humidity: number;
  soil: number;
  confidence: number;
};

export const defaultForecast: Forecast[] = [
  { horizon: "6h", temp: 30, humidity: 46, soil: 42, confidence: 0.86 },
  { horizon: "12h", temp: 29, humidity: 48, soil: 40, confidence: 0.83 },
  { horizon: "24h", temp: 28, humidity: 51, soil: 38, confidence: 0.79 },
  { horizon: "48h", temp: 27, humidity: 54, soil: 36, confidence: 0.74 },
];
