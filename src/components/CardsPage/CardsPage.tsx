import ListGroup from "./ListGroup";
import data from "../../assets/OoT.json";
import { Zone, ZoneType } from "../../models/Types";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Masonry from "@mui/lab/Masonry";
import { LegacyRef, useEffect, useState } from "react";
import useMeasure from "react-use/lib/useMeasure";

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
  const [ref, { width }] = useMeasure() as [LegacyRef<HTMLDivElement>, { width: number }];
  // Calculate the number of columns based on the width of Main
  let columns = 1; // Default to 1 column

  if (width >= 1820) {
    columns = 5; // Set to 5 columns for screens >= 1920px wide
  } else if (width >= 1180) {
    columns = 4; // Set to 4 columns for screens >= 1280px wide
  } else if (width >= 860) {
    columns = 3; // Set to 3 columns for screens >= 960px wide
  } else if (width >= 500) {
    columns = 2; // Set to 2 columns for screens >= 600px wide
  }

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
    <Main ref={ref} open={drawerOpen} widthOffset={drawerWidth}>
      <Toolbar />
      <Masonry columns={columns} spacing={2}>
        {filteredZones.map((zoneInfo, index) => (
          <ListGroup key={index} heading={zoneInfo.name} items={zoneInfo.items}></ListGroup>
        ))}
      </Masonry>
    </Main>
  );
}

export default CardsPage;
