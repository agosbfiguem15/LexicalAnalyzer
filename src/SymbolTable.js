import React from 'react';
import { Table } from 'reactstrap';

function LexicalTable({ tokens }) {
  console.log(tokens)
  return (
    <div className='table-symbol'>
      {tokens.length > 0 ? 
    <Table responsive>
      <thead>
        <tr>
          <th>Token</th>
          <th>Lexema</th>
          <th>Palabra reservada</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map((token, index) => (
          <tr key={index}>
            <td>{token.value}</td>
            <td>{token.value}</td>
            <td>{token.type === 'reservada' ? 'true' : 'false'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    : null}
    </div>
  );
}

export default LexicalTable;