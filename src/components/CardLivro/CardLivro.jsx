import "./CardLivro.css";

function CardLivro({ livro }) {
  return (
    <div className="card-livro">
      <h3>{livro.titulo}</h3>
      <p>{livro.autor}</p>
    </div>
  );
}

export default CardLivro;