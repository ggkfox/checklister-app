import React from "react";
import "./NavBar.css";
import { AppBar, Toolbar, Button, Box, Grid, ToggleButtonGroup, useTheme } from "@mui/material";
import { ZoneType } from "../../models/Types";

interface props {
  drawerState: boolean;
  toggleDrawer: () => void;
  zoneFilter: ZoneType;
  handleZoneFilter: (args: ZoneType) => void;
  drawerWidth: number;
}

const NavBar = ({ drawerState, toggleDrawer, zoneFilter, handleZoneFilter, drawerWidth }: props) => {
  return (
    <>
      <AppBar position="fixed" sx={{ width: drawerState ? `calc(100% - ${drawerWidth}px)` : "100%", background: "white", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
            <Grid item>
              {/* <Typography variant="h6" noWrap component="div"> */}
              <Button color={!drawerState ? "secondary" : "error"} variant="contained" onClick={toggleDrawer}>
                {!drawerState ? "Open Help Tool" : "Close Help Tool"}
              </Button>
            </Grid>
            <Grid item>
              <ToggleButtonGroup size="small" exclusive color="primary" aria-label="text button group">
                <Button sx={{ background: "#777" }} variant="contained" onClick={() => handleZoneFilter("overworld")}>
                  Overworld
                </Button>
                <Button sx={{ background: "#777" }} variant="contained" onClick={() => handleZoneFilter("all")}>
                  All
                </Button>
                <Button sx={{ background: "#777" }} variant="contained" onClick={() => handleZoneFilter("dungeon")}>
                  Dungeons
                </Button>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
