import React from "react";
import { Drawer, Box, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";

const drawerWidth = 300;

const AppDrawer = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
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
