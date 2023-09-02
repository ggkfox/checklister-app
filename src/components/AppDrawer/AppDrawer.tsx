import React from "react";
import { Drawer, Box, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";

interface props {
  drawerState: boolean;
  toggleDrawer: () => void;
}

const drawerWidth = 300;

const AppDrawer = ({ drawerState, toggleDrawer }: props) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
      variant="persistent"
      anchor="left"
      open={drawerState}
    >
      <Toolbar />
      <Box p={2} textAlign="center">
        <Typography variant="h6" component="div">
          side Panel
        </Typography>
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
