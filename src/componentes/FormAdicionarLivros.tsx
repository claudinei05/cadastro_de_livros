import React from "react";
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
  onClose: () => void; // Defina a propriedade onClose
}

export default function FormAdicionarLivros({
  open,
  onClose, // Use onClose em vez de anclose
}: FormAdicionarLivrosProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      {" "}
      {/* Use onClose aqui */}
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
        />
        <TextField
          margin="dense"
          id="author"
          label="Autor"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          id="dataPublicacao"
          label="Data de Publicação"
          type="date"
          fullWidth
          variant="standard"
        />{" "}
        <TextField
          margin="dense"
          id="dataCadastro"
          label="Data de Cadastro"
          type="date"
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          id="genero"
          label="Genero"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          id="description"
          label="Descrição"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Fechar</Button> {/* Use onClose aqui */}
        <Button onClick={() => {}}>Adicionar</Button>
      </DialogActions>
    </Dialog>
  );
}
