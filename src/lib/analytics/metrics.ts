export function movingAverage(series: number[], window: number) {
  if (window <= 0) return series;
  return series.map((value, index) => {
    const start = Math.max(0, index - window + 1);
    const slice = series.slice(start, index + 1);
    const avg = slice.reduce((sum, v) => sum + v, 0) / slice.length;
    return Number(avg.toFixed(2));
  });
}

export function minMaxAvg(series: number[]) {
  const min = Math.min(...series);
  const max = Math.max(...series);
  const avg = series.reduce((sum, v) => sum + v, 0) / series.length;
  return { min, max, avg: Number(avg.toFixed(2)) };
}
