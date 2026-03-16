import React from 'react';
// Importamos os componentes do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Importamos os estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Livros.css';

const livrosExemplo = [
  { id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', img: 'https://m.media-amazon.com/images/I/41RBd2DvmgL._SY445_SX342_ML2_.jpg' },
  { id: 2, titulo: '1984', autor: 'George Orwell', img: 'https://m.media-amazon.com/images/I/61t0bwt1s3L._SY342_.jpg' },
  { id: 3, titulo: 'Dom Casmurro', autor: 'Machado de Assis', img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRujQELzaemZrrKDSSilhbm7bhixK8CgtkWPgWfv4cmEwAMULw6_Vy2J2dbYxwYiEksYI-VdfmLB6jCJVVyyfvfzFIaEsF2rRCWa3xximc' },
  { id: 4, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', img: 'https://m.media-amazon.com/images/I/718DONvCVlL.jpg' },
];

function Livros() {
  return (
    <section className="secao-livros">
      <h2>Nossos Livros Disponíveis</h2>
      
      {/* Trocamos a div pelo Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}        // Espaço entre os livros
        slidesPerView={3}        // Quantos livros aparecem (3 por vez)
        navigation               // Ativa as setas laterais
        pagination={{ clickable: true }} // Ativa as bolinhas de baixo
        breakpoints={{           // Ajuste para celular e tablet
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="container-cards"
      >
        {livrosExemplo.map((livro) => (
          <SwiperSlide key={livro.id}>
            <div className="card-livro">
              <img src={livro.img} alt={livro.titulo} className="capa-livro" />
              <div className="card-info">
                <h3>{livro.titulo}</h3>
                <p>{livro.autor}</p>
                <button className="btn-acessar">Ver Detalhes</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Livros;