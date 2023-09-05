import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { ZoneType } from "../../models/Types";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

interface props {
  drawerOpen: boolean;
  toggleDrawer: () => void;
  zoneFilter: ZoneType;
  handleZoneFilter: (args: ZoneType) => void;
  drawerWidth: number;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  width: number;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open, width }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${width}px)`,
    marginLeft: `${width}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const NavBar = ({ drawerOpen, toggleDrawer, zoneFilter, handleZoneFilter, drawerWidth }: props) => {
  return (
    <>
      <AppBar position="fixed" open={drawerOpen} width={drawerWidth} /*sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}*/>
        <Toolbar>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit" aria-label="open drawer" onClick={toggleDrawer} edge="start" sx={{ mr: 2, ...(drawerOpen && { display: "none" }) }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
              Fox's Checklister App
            </Typography>
          </div>
          <Grid container spacing={2} sx={{ justifyContent: "right", alignItems: "center" }}>
            <Grid item sx={{ paddingTop: 0 }}>
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
