import React from 'react';
import { Table } from 'reactstrap';

function LexicalTable({ tokens }) {
  return (
    <div className='container-table'>
      {tokens.length > 0 ? 
    <Table responsive className='tabe-lexical'>
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
