import { useState } from "react";
import "./App.css";
import { AgeType, ZoneType } from "./models/Types";
import NavBar from "./components/NavBar/NavBar";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import CardsPage from "./components/CardsPage/CardsPage";
import keyItems from "./assets/OOT/index";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { colorModeContext, useMode } from "./theme";

function App() {
  const { theme, colorMode } = useMode();
  //Drawer states & functions
  const drawerWidth = 260;

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
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <NavBar zoneFilter={zoneFilter} handleZoneFilter={handleZoneFilter} handleAgeFilter={handleAgeFilter} drawerWidth={drawerWidth} />
          <AppDrawer drawerWidth={drawerWidth} />
          <CardsPage drawerWidth={drawerWidth} zoneFilter={zoneFilter} ageFilter={ageFilter} />
        </Box>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
