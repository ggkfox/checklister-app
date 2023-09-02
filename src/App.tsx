import { useState } from "react";
import "./App.css";
import { ZoneType } from "./models/Types";
import NavBar from "./components/NavBar/NavBar";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import CardsPage from "./components/CardsPage/CardsPage";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import React from "react";
import { Box } from "@mui/material";

function App() {
  const drawerWidth = 300;
  const [drawerState, setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer(!drawerState);
    console.log("state");
  };

  const [zoneFilter, setZoneTypeFilter] = useState<ZoneType>("all");
  const handleZoneFilter = (args: ZoneType) => {
    setZoneTypeFilter(args);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <NavBar zoneFilter={zoneFilter} handleZoneFilter={handleZoneFilter} drawerState={drawerState} toggleDrawer={toggleDrawer} drawerWidth={drawerWidth} />
        <AppDrawer toggleDrawer={toggleDrawer} drawerState={drawerState} />
        <CardsPage zoneFilter={zoneFilter} />
      </Box>
    </>
  );
}

export default App;
