import React from 'react';
import './Livros.css';

const livrosExemplo = [
  { id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', img: '/livro1.png' },
  { id: 2, titulo: '1984', autor: 'George Orwell', img: '/livro2.png' },
  { id: 3, titulo: 'Dom Casmurro', autor: 'Machado de Assis', img: '/livro3.png' },
  { id: 4, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', img: '/livro4.png' },
];

function Livros() {
  return (
    <section className="secao-livros">
      <h2>Nossos Livros Disponíveis</h2>
      <div className="container-cards">
        {livrosExemplo.map((livro) => (
          <div key={livro.id} className="card-livro">
            <img src={livro.img} alt={livro.titulo} />
            <div className="card-info">
              <h3>{livro.titulo}</h3>
              <p>{livro.autor}</p>
              <button className="btn-acessar">Ver Detalhes</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Livros;
