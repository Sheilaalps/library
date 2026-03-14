import { useState } from "react";
import axios from "axios";
import "./DelUsuario.css";

function DelUsuario() {

  const [id, setId] = useState("");

  const deletarUsuario = () => {

    axios.delete(`http://localhost:8080/api/usuarios/${id}`)
      .then(() => alert("Usuário excluído!"))
      .catch(() => alert("Erro ao excluir"));

  };

  return (
    <section className="delete-banner">

      <img src="/delete.jpg" alt="background" className="delete-bg"/>

      <div className="delete-overlay"></div>

      <div className="delete-content">

        <h2>Excluir Usuário</h2>

        <input
          type="text"
          placeholder="Digite o ID do usuário"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <button onClick={deletarUsuario}>
          Excluir
        </button>

      </div>

    </section>
  );
}

export default DelUsuario