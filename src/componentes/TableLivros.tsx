import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Button, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
interface Livro {
  title: string;
  author: string;
  gender: string;
  description: string;
  publicationYear: string;
  dateRegister: string;
}

function ListaLivros() {
  const [livros, setLivros] = useState(getSavedBooks());
  // Função para obter os livros salvos do localStorage
  function getSavedBooks(): Livro[] {
    const livrosSalvos = JSON.parse(localStorage.getItem("livros") || "[]");
    return livrosSalvos;
  }
  function handleDeleteLivro(index: number) {
    // Obter a lista de livros do localStorage
    const livrosSalvos = getSavedBooks();

    // Remover o livro da lista com base no índice
    livrosSalvos.splice(index, 1);

    // Atualizar a lista de livros no localStorage
    localStorage.setItem("livros", JSON.stringify(livrosSalvos));

    // Atualizar o estado 'livros' no React com a lista atualizada
    setLivros(livrosSalvos);
  }
  return (
    <div>
      <h2>Livros Salvos</h2>
      <List>
        {getSavedBooks().map((livro: Livro, index: number) => (
          <ListItem key={index}>
            <Grid sx={{}}>
              <ListItemText
                primary={`Título: ${livro.title}`}
                secondary={
                  <>
                    <div className="alignRight">Autor: {livro.author}</div>
                    <div className="alignRight">Genero: {livro.gender}</div>
                    <div className="alignRight">
                      Descrição: {livro.description}
                    </div>
                    <div className="alignRight">
                      Ano da Publicação: {livro.publicationYear}
                    </div>
                    <div className="alignRight">
                      Data do Registro: {livro.dateRegister}
                    </div>
                    <div className="alignRight">
                      <Button
                        variant="contained"
                        endIcon={<EditIcon />}
                        // onClick={handleOpen}
                      ></Button>
                      <Button
                        sx={{ m: 1 }}
                        variant="contained"
                        endIcon={<DeleteIcon />}
                        onClick={() => handleDeleteLivro(index)}
                      ></Button>
                    </div>
                  </>
                }
              />
            </Grid>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ListaLivros;
