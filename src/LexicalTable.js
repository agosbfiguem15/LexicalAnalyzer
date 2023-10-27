import React from 'react';
import { Table } from 'reactstrap';

function LexicalTable({ tokens }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Codigo</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map((token, index) => (
          <tr key={index}>
            <td>{token.type}</td>
            <td>{token.value}</td>
            <td>{token.code}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default LexicalTable;
