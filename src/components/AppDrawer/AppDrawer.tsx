import React from "react";
import { Drawer, Box, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ItemTracker from "./ItemTracker/ItemTracker";

interface props {
  drawerOpen: boolean;
  toggleDrawer: () => void;
  drawerWidth: number;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const AppDrawer = ({ drawerOpen, toggleDrawer, drawerWidth }: props) => {
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={drawerOpen}
    >
      <Toolbar />
      <DrawerHeader>
        <IconButton onClick={toggleDrawer}>{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
      </DrawerHeader>
      <Toolbar />
      <Box p={2} textAlign="center">
        <Typography variant="h6" component="div">
          Items tracker + suggestion logic coming. ^.^
        </Typography>
        <ItemTracker />
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
