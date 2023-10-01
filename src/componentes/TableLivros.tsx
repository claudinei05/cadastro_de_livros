import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  titulo: string,
  autor: string,
  anoPublicacao: string,
  dataCadastro: string,
  genero: string,
  descricao: string
) {
  return { titulo, autor, anoPublicacao, dataCadastro, genero, descricao };
}

const rows = [createData("", "", "", "", "", "")];

export default function TabelasLivros() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Titulo</TableCell>
            <TableCell align="right">Autor</TableCell>
            <TableCell align="right">Ano Publicação</TableCell>
            <TableCell align="right">Data de Cadastro</TableCell>
            <TableCell align="right">Genero</TableCell>
            <TableCell align="right">Descrição</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.titulo}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.titulo}
              </TableCell>
              <TableCell align="right">{row.autor}</TableCell>
              <TableCell align="right">{row.anoPublicacao}</TableCell>
              <TableCell align="right">{row.dataCadastro}</TableCell>
              <TableCell align="right">{row.genero}</TableCell>
              <TableCell align="right">{row.descricao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
