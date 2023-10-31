import React, { useState } from 'react';
import LexicalTable from './LexicalTable';
import { lexicalAnalyzer } from './LexicalAnalyzer';
import SymbolTable from './SymbolTable';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import symbol from './lexemes.json';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [tokens, setTokens] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const analyzeInput = () => {
    const analyzedTokens = lexicalAnalyzer(inputValue);
    setTokens(analyzedTokens);
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const tokens1 = symbol.map(item => ({
    value: item.nombre,
    type: item.tipo
  }));

  return (
    <div>
      <h1 className='title'>Analizador Léxico</h1>
      <div className='container'>
      <div className='area'>
        <span className='in'>Entrada</span>
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        className="form-control"
        rows="5"
      />
      </div>
      <div>
        <span className='out'>Salida</span>
      <LexicalTable tokens={tokens} />
      </div>
      </div>
      <div className='buttons'>
      <button className='button-table' onClick={analyzeInput}>
        Analizar
      </button>
      <Button className='button-table' onClick={clearInput}>
        Limpiar
      </Button>
      <Button className='button-table' onClick={toggle}>
        Tabla de Simbolos
      </Button>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
      <ModalFooter>
          <Button className='button-modal' color="secondary" onClick={toggle}>
            X
          </Button>
        </ModalFooter>
        <ModalBody >
          <SymbolTable tokens={tokens1} />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default App;
