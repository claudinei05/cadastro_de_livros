import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

interface FormAdicionarLivrosProps {
  open: boolean;
  onClose: () => void;
}

function getSavedBooks() {
  const livrosSalvos = JSON.parse(localStorage.getItem("livros") || "[]");
  return livrosSalvos;
}

export default function FormAdicionarLivros({
  open,
  onClose,
}: FormAdicionarLivrosProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [dateRegister, setDateRegister] = useState("");

  const handleAdd = () => {
    // Capturar os valores dos campos
    const novoLivro = {
      title,
      author,
      gender,
      description,
      publicationYear,
      dateRegister,
    };

    // Verificar se já existem dados salvos no localStorage
    const livrosSalvos = getSavedBooks();

    // Adicionar o novo livro à lista de livros salvos
    livrosSalvos.push(novoLivro);

    // Salvar a lista atualizada no localStorage
    localStorage.setItem("livros", JSON.stringify(livrosSalvos));

    // Fechar o diálogo após salvar
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Adicionar Livro</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Título"
          type="text"
          fullWidth
          variant="standard"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          id="author"
          label="Autor"
          type="text"
          fullWidth
          variant="standard"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <TextField
          margin="dense"
          id="gender"
          label="gender"
          type="text"
          fullWidth
          variant="standard"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <TextField
          margin="dense"
          id="description"
          label="Descrição"
          type="text"
          fullWidth
          variant="standard"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          margin="dense"
          id="publicationYear"
          label="Ano da Publicação"
          type="text"
          fullWidth
          variant="standard"
          value={publicationYear}
          onChange={(e) => setPublicationYear(e.target.value)}
        />{" "}
        <TextField
          margin="dense"
          id="dateRegister"
          label="Data do Registro"
          type="text"
          fullWidth
          variant="standard"
          value={dateRegister}
          onChange={(e) => setDateRegister(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Fechar</Button>
        <Button onClick={handleAdd}>Adicionar</Button>
      </DialogActions>
    </Dialog>
  );
}
