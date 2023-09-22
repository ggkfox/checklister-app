import { createContext, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { AgeType, ZoneType, ItemStateType } from "./models/Types";
import NavBar from "./components/NavBar/NavBar";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import CardsPage from "./components/CardsPage/CardsPage";
import keyItems from "./assets/OOT/index";
import { Box, CssBaseline } from "@mui/material";
import { ItemStateContext } from "./contexts/ItemStateContext";

function App() {
  //Drawer states & functions
  const drawerWidth = 280;
  const [drawerOpen, setDrawer] = useState(true);
  const toggleDrawer = () => {
    setDrawer(!drawerOpen);
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

  //itemTrackerStates
  const [itemStates, setItemStates] = useState<ItemStateType>(() => {
    const result: ItemStateType = {};
    keyItems.forEach((group) => {
      group.forEach((icon) => {
        result[icon.name] = {
          currentState: 0,
          numOfStates: icon.states.length,
        };
      });
    });
    return result;
  });

  const incrementItemState = (itemName: string) => {
    setItemStates((prevItemStates) => ({
      ...prevItemStates,
      [itemName]: {
        ...prevItemStates[itemName],
        currentState: (prevItemStates[itemName].currentState + 1) % prevItemStates[itemName].numOfStates,
      },
    }));
    console.log("change effect");
    return itemStates[itemName].currentState;
  };

  return (
    <>
      <ItemStateContext.Provider value={{ itemStates, incrementItemState }}>
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
      </ItemStateContext.Provider>
    </>
  );
}

export default App;
