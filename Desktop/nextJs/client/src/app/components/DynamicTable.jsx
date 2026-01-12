// src/components/DynamicTable.jsx

export default function DynamicTable({ title, columns, rows, fieldMapping }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ marginBottom: 10 }}>{title}</h2>

      <table border="1" cellPadding={8} cellSpacing={0} width="100%">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.length > 0 ? (
            rows.map((row, i) => (
              <tr key={i}>
                {columns.map((col) => (
                  <td key={col}>{row[fieldMapping[col]] ?? "-"}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: "center" }}>
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
