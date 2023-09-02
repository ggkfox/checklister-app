import React from "react";
import "./NavBar.css";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

interface props {
  drawerState: boolean;
  toggleDrawer: () => void;
}

const NavBar = ({ drawerState, toggleDrawer }: props) => {
  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <Button color={!drawerState ? "secondary" : "error"} variant="contained" onClick={toggleDrawer}>
              {!drawerState ? "Open Help Tool" : "Close Help Tool"}
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
