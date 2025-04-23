import { useEffect, useState } from 'react';
import axios from 'axios';

function ListaAlunos() {
  const [alunos, setAlunos] = useState([]);

  const fetchAlunos = async () => {
    const res = await axios.get('http://localhost:5000/alunos');
    setAlunos(res.data);
  };

  useEffect(() => {
    fetchAlunos();
  }, []);

  const gerarRelatorio = async () => {
    const res = await axios.get('http://localhost:5000/relatorio', { responseType: 'blob' });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'relatorio_alunos.pdf');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div style={{ maxWidth: 800, margin: '2rem auto' }}>
      <h1>Lista de Alunos</h1>
      <ul>
        {alunos.map((a, i) => (
          <li key={i}>
            {a.nome} ({a.idade} anos) - Média: {a.media} - {a.aprovado ? 'Aprovado' : 'Reprovado'}
          </li>
        ))}
      </ul>

      <button onClick={gerarRelatorio} style={{ marginTop: '1rem' }}>
        📄 Gerar Relatório PDF
      </button>
    </div>
  );
}

export default ListaAlunos;
