import { useState, useEffect } from 'react';
import DelUsuario from "../DelUsuario/DelUsuario";
import './ListaUsuario.css';

export default function ListaUsuario() {
const [usuarios, setUsuarios] = useState([]); // Garanta o [] aqui

  // Função para buscar os usuários no Java
  const carregarUsuarios = async () => {
    try {
      const response = await fetch('http://localhost:8080/usuarios'); 
      const dados = await response.json();
      setUsuarios(dados);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };

  // Carrega a lista assim que a página abre
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    carregarUsuarios();
  }, []);

  return (
    <div className="lista-container">
      <h3>Lista de Usuários Cadastrados</h3>
      
      {usuarios.length === 0 ? (
        <p>Nenhum usuário encontrado.</p>
      ) : (
        usuarios.map(user => (
          <div key={user.id} className="linha-usuario" style={{ display: 'flex', gap: '20px', marginBottom: '10px', alignItems: 'center' }}>
            <span><strong>ID: {user.id}</strong> - {user.nome}</span>
            
            {/* Aqui entra o botão ÚNICO de deletar para cada usuário */}
            <DelUsuario idUsuario={user.id} aoDeletar={carregarUsuarios} /> 
          </div>
        ))
      )}
    </div>
  );
}
