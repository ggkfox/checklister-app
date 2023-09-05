import { useState } from "react";
import "./App.css";
import { ZoneType } from "./models/Types";
import NavBar from "./components/NavBar/NavBar";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import CardsPage from "./components/CardsPage/CardsPage";
import React from "react";
import { Box, CssBaseline } from "@mui/material";

function App() {
  //Drawer states & functions
  const drawerWidth = 300;
  const [drawerOpen, setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer(!drawerOpen);
    console.log("state");
  };
  //filter button states & functions
  const [zoneFilter, setZoneTypeFilter] = useState<ZoneType>("all");
  const handleZoneFilter = (args: ZoneType) => {
    setZoneTypeFilter(args);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar zoneFilter={zoneFilter} handleZoneFilter={handleZoneFilter} drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} drawerWidth={drawerWidth} />
        <AppDrawer toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} drawerWidth={drawerWidth} />
        <CardsPage drawerOpen={drawerOpen} drawerWidth={drawerWidth} zoneFilter={zoneFilter} />
      </Box>
    </>
  );
}

export default App;
