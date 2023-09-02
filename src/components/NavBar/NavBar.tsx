import React from "react";
import "./NavBar.css";
import { AppBar, Toolbar, Typography, Slide, useScrollTrigger } from "@mui/material";

const NavBar = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
