import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CadastroUsuario from "./pages/CadastroUsuario";
import Usuarios from "./pages/Usuarios";
import Emprestimos from "./pages/Emprestimos";
import Livros from "./pages/Livros";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: "20px", background: "#eee", marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Livros</Link>
          <Link to="/usuarios" style={{ marginRight: "10px" }}>Ver Usuários</Link>
          <Link to="/cadastrar" style={{ marginRight: "10px" }}>Novo Usuário</Link>
          <Link to="/emprestimos">Empréstimos</Link>
        </nav>

        <h1>Sistema Biblioteca</h1>

        <Routes>
          {/* Aqui o React decide qual componente mostrar baseado na URL */}
          <Route path="/" element={<Livros />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/cadastrar" element={<CadastroUsuario />} />
          <Route path="/emprestimos" element={<Emprestimos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
