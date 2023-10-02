import React from "react";
import FormAdicionarLivros from "./FormAdicionarLivros";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Button, Grid, IconButton } from "@mui/material";
import { blue } from "@mui/material/colors";
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
                        sx={{ m: 1 }}
                        variant="contained"
                        endIcon={<DeleteIcon />}
                        // onClick={handleOpen}
                      ></Button>
                      <Button
                        variant="contained"
                        endIcon={<EditIcon />}
                        // onClick={handleOpen}
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
