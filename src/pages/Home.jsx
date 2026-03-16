import React from 'react';
import FormUsuario from '../components/FormUsuario/FormUsuario';
import './Home.css'; 

function Home() {
  return (
    <div className="home-container">
      {/* Agora o texto e o formulário estão juntos na mesma section .banner */}
      <section className="banner">
        
        <div className="banner-content">
          <h1>Bem-vindo à Biblioteca</h1>
          <p>Sua porta de entrada para o conhecimento.</p>
        </div>

        {/* Removi a outra section e coloquei o componente aqui dentro */}
        <FormUsuario />

      </section>
    </div>
  );
}

export default Home;