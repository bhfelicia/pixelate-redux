import React from "react";
import TableCell from "./TableCell";

const TableRow = ({ row, rowIdx, draw }) => {
  return (
    <tr key={`${row}-${rowIdx}`} value={`${rowIdx}`}>
      {row.map((color, cellIdx) => (
        <TableCell
          key={`${color}-${cellIdx}`}
          color={color}
          rowIdx={rowIdx}
          cellIdx={cellIdx}
          draw={draw}
        />
      ))}
    </tr>
  );
};

export default TableRow;
