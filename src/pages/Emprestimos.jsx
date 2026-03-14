import { useEffect, useState } from "react";
import { listarEmprestimos } from "../services/api";

function Emprestimos() {
  const [emprestimos, setEmprestimos] = useState([]);

  useEffect(() => {
    listarEmprestimos().then(setEmprestimos);
  }, []);

  return (
    <div>
      <h1>Lista de Empréstimos</h1>

      {emprestimos.map((e) => (
        <div key={e.id}>
          <p>Usuário: {e.usuario.nome}</p>
          <p>Livro: {e.livro.titulo}</p>
          <p>Data: {e.dataEmprestimo}</p>
        </div>
      ))}
    </div>
  );
}

export default Emprestimos