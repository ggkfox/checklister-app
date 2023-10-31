import { Drawer, Box, Toolbar, Button } from "@mui/material";
import { Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyItemGrid from "./ItemTracker/KeyItemGrid";
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
      PaperProps={{
        style: {
          backgroundColor: theme.palette.secondary.main,
          width: drawerWidth,
        },
      }}
      sx={{
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.secondary.main,
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
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
        <KeyItemGrid />
        <Button sx={{ backgroundColor: theme.palette.success.main, marginTop: "40px" }} variant="contained">
          Disable logic
          <br />
          (placeholder)
        </Button>
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
