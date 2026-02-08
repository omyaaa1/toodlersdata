const matrix = [
  ["Temp", "Humidity", "Soil", "Light", "Rain"],
  [1, -0.62, -0.4, 0.72, -0.2],
  [-0.62, 1, 0.55, -0.3, 0.41],
  [-0.4, 0.55, 1, -0.2, 0.6],
  [0.72, -0.3, -0.2, 1, -0.15],
  [-0.2, 0.41, 0.6, -0.15, 1],
];

export function CorrelationMatrix() {
  return (
    <div className="grid grid-cols-6 border border-[var(--td-border)] text-xs">
      {matrix.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const value = typeof cell === "number" ? cell : null;
          const intensity =
            value === null ? "transparent" : `rgba(0, 240, 255, ${Math.abs(value)})`;
          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="flex h-10 items-center justify-center border border-[var(--td-border)]"
              style={{ background: intensity }}
            >
              {value === null ? (
                <span className="uppercase tracking-[0.2em] text-[var(--td-muted)]">
                  {cell}
                </span>
              ) : (
                <span>{value}</span>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
