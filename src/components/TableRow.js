import React from 'react';

const TableRow = ({ row, rowIdx, draw }) => {
  return (
    <tr key={`${row}-${rowIdx}`} value={`${rowIdx}`}>
      {row.map((color, cellIdx) => (
        <td
          key={`${color}-${cellIdx}`}
          className={color}
          value={`${cellIdx}`}
          onClick={() => draw(rowIdx, cellIdx)}
        ></td>
      ))}
    </tr>
  );
};

export default TableRow;
