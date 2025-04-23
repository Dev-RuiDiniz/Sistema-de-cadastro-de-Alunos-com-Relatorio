import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [form, setForm] = useState({ nome: '', idade: '', nota1: '', nota2: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/alunos', form);
    setForm({ nome: '', idade: '', nota1: '', nota2: '' });
    navigate('/alunos');  // Redireciona para a lista de alunos após cadastro
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto' }}>
      <h1>Cadastro de Alunos</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
        <input name="idade" type="number" placeholder="Idade" value={form.idade} onChange={handleChange} required />
        <input name="nota1" type="number" placeholder="Nota 1" value={form.nota1} onChange={handleChange} required />
        <input name="nota2" type="number" placeholder="Nota 2" value={form.nota2} onChange={handleChange} required />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
