import { useState } from 'react';
import { cadastrarAluno } from '../api';

export default function AlunoForm({ onCadastro }) {
  const [form, setForm] = useState({ nome: '', idade: '', nota1: '', nota2: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await cadastrarAluno(form);
    onCadastro();
    setForm({ nome: '', idade: '', nota1: '', nota2: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" required className="border p-2 w-full" />
      <input name="idade" type="number" value={form.idade} onChange={handleChange} placeholder="Idade" required className="border p-2 w-full" />
      <input name="nota1" type="number" step="0.1" value={form.nota1} onChange={handleChange} placeholder="Nota 1" required className="border p-2 w-full" />
      <input name="nota2" type="number" step="0.1" value={form.nota2} onChange={handleChange} placeholder="Nota 2" required className="border p-2 w-full" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Cadastrar</button>
    </form>
  );
}
