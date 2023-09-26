import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <AppRoutes />
    </>
  );
}

export default App;
