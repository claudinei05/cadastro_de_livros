import React, { useState } from "react";
import { Button, Grid, Paper } from "@mui/material";
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
    <Grid container>
      <Grid
        container
        spacing={2}
        sx={{
          height: "100%",
          padding: "0 5rem ",
          backgroundColor: "#4253b1",
        }}
        justifyContent="center"
      >
        <Grid item>
          <Paper
            square
            elevation={0}
            sx={{
              background: "#ca9a40",
              color: "black",
              borderRadius: "10px ",
              padding: "50px",
              m: 3,
            }}
          >
            <Grid>
              <Grid item>
                <ListaLivros />
              </Grid>
            </Grid>
          </Paper>
          <Grid>
            <Grid item alignItems="center">
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleOpen}
              >
                Adicionar Livro
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <FormAdicionarLivros open={open} onClose={handleClose} />
      </Grid>
    </Grid>
  );
};

export default Livros;
