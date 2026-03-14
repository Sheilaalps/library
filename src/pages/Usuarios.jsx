import ListaUsuario from "../components/Lista/ListaUsuario";
import DelUsuario from "../components/DelUsuario/DelUsuario"; // Importe o componente aqui

export default function Usuarios() {
  return (
    <div>
      <h2>Gerenciar Usuários</h2>
      
      {/* 
        Abaixo você chamaria sua lista. 
        Se a lista já tiver o botão de delete dentro dela, 
        você só chama a lista: 
      */}
      <ListaUsuario />

      {/* 
        Se você quiser testar o botão solto nesta página primeiro, 
        poderia fazer assim: 
      */}
      <hr />
      <h3>Área de Exclusão Rápida</h3>
      <DelUsuario /> 
    </div>
  );
}
