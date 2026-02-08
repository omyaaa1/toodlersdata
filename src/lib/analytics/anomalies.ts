type Anomaly = {
  index: number;
  score: number;
  reason: string;
};

export function detectSimpleAnomalies(series: number[], threshold = 2): Anomaly[] {
  const avg =
    series.reduce((sum, value) => sum + value, 0) / Math.max(series.length, 1);
  const variance =
    series.reduce((sum, value) => sum + Math.pow(value - avg, 2), 0) /
    Math.max(series.length, 1);
  const std = Math.sqrt(variance);
  return series
    .map((value, index) => {
      const score = Math.abs(value - avg) / (std || 1);
      if (score < threshold) return null;
      return {
        index,
        score: Number(score.toFixed(2)),
        reason: "Deviation from mean",
      };
    })
    .filter((value): value is Anomaly => Boolean(value));
}
