import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Livros from "./pages/Livros";
import CadastroUsuario from "./pages/CadastroUsuario";
import Admin from "./components/Admin/Admin"; // 1. Importe o componente Admin
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acervo" element={<Livros />} />
        <Route path="/cadastrar" element={<CadastroUsuario />} />
        {/* 2. Adicione a rota para o painel administrativo */}
        <Route path="/admin" element={<Admin />} /> 
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;