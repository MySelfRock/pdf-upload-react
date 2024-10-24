// src/App.js
import React from 'react';
import './App.css';
import UploadPdf from './components/UploadPdf';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Upload de Arquivo PDF</h1>
        <UploadPdf />
      </header>
    </div>
  );
}

export default App;
