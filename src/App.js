import React, { useState } from 'react';
import LexicalTable from './LexicalTable';
import { lexicalAnalyzer } from './LexicalAnalyzer';

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

  return (
    <div>
      <h1>Analizador Léxico</h1>
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        className="form-control"
        rows="5"
      />
      <button onClick={analyzeInput} className="btn btn-primary mt-3">
        Analizar
      </button>
      <h2>Resultados:</h2>
      <LexicalTable tokens={tokens} />
    </div>
  );
}

export default App;
