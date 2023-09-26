import ListGroup from "./ListGroup";
import data from "../../assets/OOT/spots.js";
import { AgeType, Zone, ZoneType } from "../../models/Types";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Masonry from "@mui/lab/Masonry";
import { LegacyRef, useEffect, useState } from "react";
import useMeasure from "react-use/lib/useMeasure";
import { useAtom } from "jotai";
import { drawerAtom } from "../../Atoms";

interface props {
  drawerWidth: number;
  zoneFilter: ZoneType;
  ageFilter: AgeType;
}

//handle shrinking of main body when sidebar opens.
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
  widthoffset?: number;
}>(({ theme, open, widthoffset }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${widthoffset}px`,
  backgroundColor: theme.palette.background.default,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

function CardsPage({ drawerWidth, zoneFilter, ageFilter }: props) {
  const [drawerOpen, setDrawer] = useAtom(drawerAtom);

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
  const zones: Zone[] = data.zones as Zone[];

  return (
    <Main ref={ref} open={drawerOpen} widthoffset={drawerWidth}>
      <Toolbar />
      <Masonry columns={columns} spacing={2}>
        {zones.map((zoneInfo: Zone, index) => (
          <ListGroup thisZone={zoneInfo} zoneFilter={zoneFilter} ageFilter={ageFilter} key={index}></ListGroup>
        ))}
      </Masonry>
    </Main>
  );
}

export default CardsPage;
