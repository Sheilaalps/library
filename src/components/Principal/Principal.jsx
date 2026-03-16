import React from "react";
import "./Principal.css";
import FormUsuario from "../FormUsuario/FormUsuario";
import DelUsuario from "../DelUsuario/DelUsuario";

function Principal() {
  return (
    <main className="principal-container" id="home">

      <section className="hero-banner">
        <img src="/background.jpg" alt="background" className="bg-image" />
        <div className="overlay"></div>

        <div className="banner-content">
          <div className="text-content">
            <h1>Bem-vindo à Biblioteca</h1>
            <p>Sua porta de entrada para o conhecimento.</p>
          </div>

          <div className="form-wrapper">
            <FormUsuario />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Principal;