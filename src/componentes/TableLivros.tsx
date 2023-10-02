import React from "react";
import FormAdicionarLivros from "./FormAdicionarLivros";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Grid } from "@mui/material";
import { blue } from "@mui/material/colors";

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
                    <div className="alignRight">
                      Descrição: {livro.description}
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
