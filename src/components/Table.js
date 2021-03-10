import React from 'react';
import TableRow from './TableRow';

const Table = ({ grid, draw }) => {
  // console.log('Table:', draw);
  return (
    <table>
      <tbody>
        {grid.map((row, rowIdx) => (
          <TableRow row={row} rowIdx={rowIdx} draw={draw} key={rowIdx} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
