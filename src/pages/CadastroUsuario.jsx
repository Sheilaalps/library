import React from 'react';
import './CadastroUsuario.css';
// 1. Importe o FormUsuario corretamente (ajuste o caminho se necessário)
import FormUsuario from '../components/FormUsuario/FormUsuario'; 

export default function CadastroUsuario() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Cadastre-se abaixo:</h1>
        {/* 2. Agora o componente vai funcionar porque foi importado acima */}
        <FormUsuario />
      </div>
    </div>
  );
}
