import React, { useState } from "react";
import { PatternFormat } from "react-number-format";
import { criarUsuario } from "../../services/api";
import "./FormUsuario.css";

function FormUsuario() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState(""); 
  const [showToast, setShowToast] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const dadosParaOBack = { nome, cpf, telefone };
    
    // 1. Envia para o Back-end
    await criarUsuario(dadosParaOBack); 

    // 2. Só limpa se o envio acima der certo
    setNome("");      // Limpa o Nome
    setCpf("");       // Limpa o CPF
    setTelefone("");  // Limpa o Telefone

    setMensagem (`Usuário cadastrado com sucesso!`);
    setShowToast(true);

  } catch (error) {
    console.error("Erro ao salvar:", error);
    setMensagem("Erro ao conectar com o servidor!");
    setShowToast(true);
  }

  setTimeout(() => setShowToast(false), 3000);
};

  return (
    < form className="form-usuario" onSubmit={handleSubmit}>
      <h2>Cadastro de Usuário</h2>
      

      <input
        type="text"
        placeholder="Nome"
        className="input-field"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <PatternFormat
        format="###.###.###-##"
        placeholder="CPF: 000.000.000-00"
        value={cpf}
        className="input-field"
        onValueChange={(values) => setCpf(values.value)} // Pega apenas os números (limpo)
      />

      <PatternFormat
        format="(##) #####-####"
        placeholder="Telefone: (00) 00000-0000"
        value={telefone}  
        className="input-field"
        onValueChange={(values) => setTelefone(values.value)} // Pega apenas os números
      />

      <button type="submit" className="botao-cadastrar">
        Cadastrar
      </button>

      {showToast && (
        <div className="toast">
          {mensagem}
        </div>
      )}
    </form>
  );
}

export default FormUsuario;
