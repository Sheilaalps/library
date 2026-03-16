import React, { useState } from 'react';
import ListaUsuario from '../Lista/ListaUsuario';
import './Admin.css';

export default function Admin() {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login: usuario, senha: senha }),
      });
      if (response.ok) {
        setLogado(true);
      } else {
        alert('Usuário ou senha inválidos!');
      }
    } catch (error) {
      console.error("Erro na conexão:", error);
      alert('Servidor Java offline!');
    }
  };

  const handleLogout = () => {
    setLogado(false);
    setUsuario('');
    setSenha('');
  };

  return (
    <div className="admin-full-layout">
      {!logado ? (
        <div className="admin-login-overlay">
          <form className="admin-login-box" onSubmit={handleLogin}>
            <h2>Acesso ao Painel</h2>
            <input 
              type="text" 
              placeholder="Usuário" 
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Senha" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)} 
            />
            <button type="submit">Entrar</button>
          </form>
        </div>
      ) : (
        <div className="admin-container">
          <aside className="admin-sidebar">
            <div className="admin-logo">
              <h2>BIBLIOTECA</h2>
              <p>Painel Administrativo</p>
            </div>
            <nav className="admin-menu">
              <ul>
                <li className="active">Gerenciar Usuários</li>
                <li>Gerenciar Livros</li>
                <li>Empréstimos</li>
                <li onClick={handleLogout} className="menu-logout">Sair</li>
              </ul>
            </nav>
          </aside>

          <main className="admin-main">
            <header className="admin-header">
              <div className="breadcrumb">Dashboard / Usuários</div>
              <div className="admin-profile">
                <span>Olá, Sheila Araújo</span>
                <button className="btn-logout" onClick={handleLogout}>Sair</button>
              </div>
            </header>

            <section className="admin-view">
              <div className="card-lista">
                <h3>Lista de Usuários Cadastrados</h3>
                <ListaUsuario />
              </div>
            </section>
          </main>
        </div>
      )}
    </div>
  );
}