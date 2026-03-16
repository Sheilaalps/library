import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"; // Importando seu Header novo
import CadastroUsuario from "./pages/CadastroUsuario";
import Usuarios from "./pages/Usuarios";
import Emprestimos from "./pages/Emprestimos";
import Livros from "./pages/Livros";

function App() {
  return (
    <Router>
      {/* O Header fica fora das Routes para aparecer em todas as páginas */}
      <Header /> 

      {/* Removi o nav cinza antigo e o h1 solto para o layout ficar limpo */}
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Livros />} />
          <Route path="/acervo" element={<Livros />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/cadastrar" element={<CadastroUsuario />} />
          <Route path="/emprestimos" element={<Emprestimos />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
