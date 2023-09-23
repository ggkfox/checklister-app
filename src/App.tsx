import { useState } from "react";
import "./App.css";
import { AgeType, ZoneType, ItemStateType } from "./models/Types";
import NavBar from "./components/NavBar/NavBar";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import CardsPage from "./components/CardsPage/CardsPage";
import keyItems from "./assets/OOT/index";
import { Box, CssBaseline } from "@mui/material";

function App() {
  //Drawer states & functions
  const drawerWidth = 280;

  //filters
  const [zoneFilter, setZoneTypeFilter] = useState<ZoneType>("all");
  const handleZoneFilter = (args: ZoneType) => {
    setZoneTypeFilter(args);
  };
  const [ageFilter, setAgeFilter] = useState<AgeType>("all");
  const handleAgeFilter = (args: AgeType) => {
    setAgeFilter(args);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar zoneFilter={zoneFilter} handleZoneFilter={handleZoneFilter} handleAgeFilter={handleAgeFilter} drawerWidth={drawerWidth} />
        <AppDrawer drawerWidth={drawerWidth} />
        <CardsPage drawerWidth={drawerWidth} zoneFilter={zoneFilter} ageFilter={ageFilter} />
      </Box>
    </>
  );
}

export default App;
