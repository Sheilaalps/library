const API_URL = "http://localhost:8080";

// --- ENTIDADE: USUÁRIO ---
// Use esta para o seu FormUsuario.jsx
export async function criarUsuario(dados) {
  const response = await fetch(`${API_URL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  if (!response.ok) throw new Error("Erro ao criar usuário");
  return response.json();
}

export async function listarUsuarios() {
  const response = await fetch(`${API_URL}/usuarios`);
  return response.json();
}


// --- ENTIDADE: LIVRO ---
// Use esta para cadastrar ou listar os livros da biblioteca
export async function listarLivros() {
  const response = await fetch(`${API_URL}/livros`);
  if (!response.ok) throw new Error("Erro ao buscar livros");
  return response.json();
}

export async function criarLivro(dados) {
  const response = await fetch(`${API_URL}/livros`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  return response.json();
}


// --- ENTIDADE: EMPRÉSTIMO ---
// Esta é a principal: ela vincula o ID do Usuário ao ID do Livro
export async function criarEmprestimo(idUsuario, idLivro) {
  const dadosEmprestimo = {
    usuario: { id: idUsuario }, // O Back-end geralmente espera o objeto ou o ID
    livro: { id: idLivro },
    dataEmprestimo: new Date().toISOString()
  };

  const response = await fetch(`${API_URL}/emprestimos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dadosEmprestimo),
  });

  if (!response.ok) throw new Error("Erro ao registrar empréstimo");
  return response.json();
}

export async function listarEmprestimos() {
  const response = await fetch(`${API_URL}/emprestimos`);
  return response.json();
}
