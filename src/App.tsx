import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import CardsPage from "./components/CardsPage/CardsPage";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import React from "react";
import { Box } from "@mui/material";

function App() {
  const [drawerState, setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer(!drawerState);
    console.log("state");
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <NavBar toggleDrawer={toggleDrawer} drawerState={drawerState} />
        <AppDrawer toggleDrawer={toggleDrawer} drawerState={drawerState} />
        <CardsPage />
      </Box>
    </>
  );
}

export default App;
