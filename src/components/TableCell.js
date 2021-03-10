import React from "react";

const TableCell = ({ color, rowIdx, cellIdx, draw }) => {
  return (
    <td
      className={color}
      value={`${cellIdx}`}
      onClick={() => draw(rowIdx, cellIdx)}
    ></td>
  );
};

export default TableCell;
