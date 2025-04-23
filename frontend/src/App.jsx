import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cadastro from './Cadastro';
import ListaAlunos from './ListaAlunos.jsx';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'sans-serif' }}>
        <nav style={{ marginBottom: '2rem' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>Cadastro</Link>
          <Link to="/alunos">Lista de Alunos</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/alunos" element={<ListaAlunos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
