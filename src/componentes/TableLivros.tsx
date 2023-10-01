import React from "react";
import FormAdicionarLivros from "./FormAdicionarLivros";

interface Livro {
  title: string;
  author: string;
  description: string;
}

function ListaLivros() {
  // Função para obter os livros salvos do localStorage
  function getSavedBooks(): Livro[] {
    const livrosSalvos = JSON.parse(localStorage.getItem("livros") || "[]");
    return livrosSalvos;
  }

  // Renderiza a lista de livros
  return (
    <div>
      <h2>Livros Salvos</h2>
      <ul>
        {getSavedBooks().map((livro: Livro, index: number) => (
          <li key={index}>
            <strong>Título:</strong> {livro.title}
            <br />
            <strong>Autor:</strong> {livro.author}
            <br />
            <strong>Descrição:</strong> {livro.description}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaLivros;
