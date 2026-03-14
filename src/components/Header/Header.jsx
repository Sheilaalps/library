import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
  <nav className="nav">
    <h1 className="logo">Biblioteca</h1>
    
    <ul className="Nav-menu">
      <li><a href="#home">Início</a></li>
      <li><a href="#livros">Livros</a></li>
      <li><a href="#emprestimos">Empréstimos</a></li>
    </ul>

    <div className="nav-buttons">
      <button className="btn-entrar">Entrar</button>
      <a href="#cadastro" className="btn-cadastro">Cadastra-se</a>
    </div>
  </nav>
</header>

  );
}

export default Header;

