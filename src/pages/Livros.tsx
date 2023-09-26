import { Container, Grid } from "@mui/material";
import React from "react";
import TabelasLivros from "../componentes/table";

const Livros: React.FC = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TabelasLivros />
      </Grid>
    </Grid>
  );
};
export default Livros;
