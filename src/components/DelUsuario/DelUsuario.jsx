// src/components/DelUsuario/DelUsuario.jsx
import axios from 'axios';
function DelUsuario({ idUsuario, aoDeletar }) { // Recebe o ID da lista


  const deletarUsuario = () => {
    axios.delete(`http://localhost:8080/usuarios/${idUsuario}`)
      .then(() => {
        alert("Usuário excluído!");
        if(aoDeletar) aoDeletar(); // Atualiza a lista automaticamente
      })
      .catch(() => alert("Erro ao excluir"));
  };

  return (
    <button onClick={deletarUsuario} className="btn-excluir-simples">
      Excluir
    </button>
  );
}

export default DelUsuario;