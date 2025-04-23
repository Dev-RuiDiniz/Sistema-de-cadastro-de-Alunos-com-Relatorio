export default function AlunoList({ alunos }) {
    return (
      <div className="mt-4">
        <h2 className="font-bold text-lg mb-2">Alunos Cadastrados</h2>
        <ul className="space-y-2">
          {alunos.map((a, i) => (
            <li key={i} className="border p-2 rounded">{a.nome} - Média: {((+a.nota1 + +a.nota2) / 2).toFixed(2)}</li>
          ))}
        </ul>
      </div>
    );
  }