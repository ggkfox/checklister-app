import ListGroup from "./ListGroup";
import data from "../../assets/OoT.json";
import { Zone, ZoneType } from "../../models/Types";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Masonry from "@mui/lab/Masonry";
import { useEffect, useState } from "react";

interface props {
  drawerOpen: boolean;
  drawerWidth: number;
  zoneFilter: ZoneType;
}

//handle shrinking of main body when sidebar opens.
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
  widthOffset?: number;
}>(({ theme, open, widthOffset }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${widthOffset}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

function CardsPage({ drawerOpen, drawerWidth, zoneFilter }: props) {
  //assign card data and apply filters.
  const zones: Zone[] = data.zones.map((zoneData) => ({
    ...zoneData,
    type: zoneData.type as ZoneType,
  }));
  const [filteredZones, setFilteredZones] = useState(zones);

  useEffect(() => {
    if (zoneFilter === "overworld") setFilteredZones(zones.filter((zone) => zone.type === "overworld"));
    else if (zoneFilter === "dungeon") setFilteredZones(zones.filter((zone) => zone.type === "dungeon"));
    else setFilteredZones(zones);
  }, [zoneFilter]);

  return (
    <Main open={drawerOpen} widthOffset={drawerWidth}>
      <Toolbar />
      <Masonry columns={/*{xl: 5, lg: 4, md: 3, sm: 2, xs: 1}*/ 4} spacing={2}>
        {filteredZones.map((zoneInfo, index) => (
          <ListGroup key={index} heading={zoneInfo.name} items={zoneInfo.items}></ListGroup>
        ))}
      </Masonry>
    </Main>
  );
}

export default CardsPage;
