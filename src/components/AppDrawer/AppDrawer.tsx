import { Drawer, Box, Toolbar, Button } from "@mui/material";
import { Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyItemTracker from "./ItemTracker/KeyItemTracker";
import { MutableRefObject } from "react";
import { useAtom } from "jotai";
import { drawerAtom } from "../../Atoms";

interface props {
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

const AppDrawer = ({ drawerWidth }: props) => {
  const [drawerOpen, setDrawer] = useAtom(drawerAtom);

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
        <IconButton
          onClick={() => {
            setDrawer(!drawerOpen);
          }}
        >
          {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Box p={2} textAlign="center">
        <Typography variant="h5" component="div">
          Key Items
        </Typography>
        <KeyItemTracker />
        <Button sx={{ marginTop: "40px" }} color="warning" variant="contained">
          Disable logic
          <br />
          (placeholder)
        </Button>
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
