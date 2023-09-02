import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import CardsPage from "./components/CardsPage/CardsPage";
import React from "react";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <NavBar />
        <AppDrawer />
        <CardsPage />
      </Box>
    </>
  );
}

export default App;
