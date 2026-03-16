import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo-link">
          <img src="/livro.png" alt="Logo" style={{ height: '50px', width: 'auto' }} />
        </Link>
        
        <ul className="Nav-menu">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/acervo">Acervo</Link></li> 
        </ul>

        <div className="nav-buttons">
          {/* Trocamos o button por Link e apontamos para /admin */}
          <Link to="/admin" className="btn-entrar">
            Admin
          </Link>
          <Link to="/cadastrar" className="btn-cadastro">Cadastre-se</Link>
        </div>

        
      </nav>
    </header>
  );
}

export default Header;
