import { useState } from "react";
import "./App.css";
import { AgeType, ZoneType } from "./models/Types";
import NavBar from "./components/NavBar/NavBar";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import CardsPage from "./components/CardsPage/CardsPage";
import React from "react";
import { Box, CssBaseline, PaletteMode, colors } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// const myTheme = (mode: PaletteMode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           // palette values for light mode
//           primary: colors.amber,
//           divider: colors.amber[200],
//           text: {
//             primary: colors.grey[900],
//             secondary: colors.grey[800],
//           },
//         }
//       : {
//           // palette values for dark mode
//           primary: colors.deepOrange,
//           divider: colors.deepOrange[700],
//           background: {
//             default: colors.deepOrange[900],
//             paper: colors.deepOrange[900],
//           },
//           text: {
//             primary: "#fff",
//             secondary: colors.grey[500],
//           },
//         }),
//   },
// });

function App() {
  //Drawer states & functions
  const drawerWidth = 280;
  const [drawerOpen, setDrawer] = useState(true);
  const toggleDrawer = () => {
    setDrawer(!drawerOpen);
    console.log("state");
  };

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
      {/* <ThemeProvider theme={myTheme}> */}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar
          zoneFilter={zoneFilter}
          handleZoneFilter={handleZoneFilter}
          handleAgeFilter={handleAgeFilter}
          drawerOpen={drawerOpen}
          toggleDrawer={toggleDrawer}
          drawerWidth={drawerWidth}
        />
        <AppDrawer toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} drawerWidth={drawerWidth} />
        <CardsPage drawerOpen={drawerOpen} drawerWidth={drawerWidth} zoneFilter={zoneFilter} ageFilter={ageFilter} />
      </Box>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
