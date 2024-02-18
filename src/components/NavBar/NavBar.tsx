import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { AgeType, ZoneType } from "../../models/Types";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import AppBar from "@mui/material/AppBar";
import { useAtom } from "jotai";
import { drawerAtom } from "../../Atoms";
import { useTheme } from "@mui/material/styles";

interface props {
  zoneFilter: ZoneType;
  handleZoneFilter: (args: ZoneType) => void;
  handleAgeFilter: (args: AgeType) => void;
  drawerWidth: number;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  width: number;
}

const NavBar = ({ zoneFilter, handleZoneFilter, handleAgeFilter, drawerWidth }: props) => {
  const [drawerOpen, setDrawer] = useAtom(drawerAtom);
  const theme = useTheme();

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1, backgroundColor: theme.palette.background.paper }}>
        <Toolbar>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              disabled={drawerOpen}
              aria-label="open drawer"
              onClick={() => {
                setDrawer(!drawerOpen);
              }}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
              Fox's Checklister App
            </Typography>
          </div>
          <Grid container gap={2} sx={{ justifyContent: "right" }}>
            <Grid item>
              <ToggleButtonGroup size="small" exclusive color="primary" aria-label="text button group">
                <Button sx={{ background: theme.palette.secondary.main }} variant="contained" onClick={() => handleAgeFilter("adult")}>
                  Child
                </Button>
                <Button sx={{ background: theme.palette.secondary.main }} variant="contained" onClick={() => handleAgeFilter("all")}>
                  /
                </Button>
                <Button sx={{ background: theme.palette.secondary.main }} variant="contained" onClick={() => handleAgeFilter("child")}>
                  Adult
                </Button>
              </ToggleButtonGroup>
            </Grid>
            <Grid>
              <ToggleButtonGroup size="small" exclusive color="primary" aria-label="text button group">
                <Button sx={{ background: theme.palette.secondary.main }} variant="contained" onClick={() => handleZoneFilter("overworld")}>
                  Overworld
                </Button>
                <Button sx={{ background: theme.palette.secondary.main }} variant="contained" onClick={() => handleZoneFilter("all")}>
                  /
                </Button>
                <Button sx={{ background: theme.palette.secondary.main }} variant="contained" onClick={() => handleZoneFilter("dungeon")}>
                  Dungeons
                </Button>
              </ToggleButtonGroup>
            </Grid>
            <IconButton onClick={() => {}}>
              <SettingsIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
