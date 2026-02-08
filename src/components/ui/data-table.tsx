type Column = {
  label: string;
  key: string;
};

type Props = {
  columns: Column[];
  rows: Record<string, string | number>[];
};

export function DataTable({ columns, rows }: Props) {
  return (
    <div className="overflow-auto border border-[var(--td-border)]">
      <table className="w-full text-left text-sm">
        <thead className="bg-[var(--td-bg-2)] text-xs uppercase tracking-[0.3em] text-[var(--td-muted)]">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="px-4 py-3">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-t border-[var(--td-border)] hover:bg-[var(--td-bg-2)]"
            >
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-3">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
