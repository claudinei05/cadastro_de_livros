import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import TabelasLivros from "../componentes/TableLivros";
import ImgBackground from "../public/assets/biblioteca-magica.avif";
import SendIcon from "@mui/icons-material/Send";
import FormAdicionarLivros from "../componentes/FormAdicionarLivros";
import ListaLivros from "../componentes/TableLivros";

const Livros: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${ImgBackground})`,
          backgroundSize: "cover",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <TabelasLivros />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item sx={{ m: 3 }}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleOpen}
            >
              Adicionar Livro
            </Button>
          </Grid>
        </Grid>
      </div>

      <FormAdicionarLivros open={open} onClose={handleClose} />
    </>
  );
};

export default Livros;
