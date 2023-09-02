import ListGroup from "./ListGroup";
import data from "../../assets/OoT.json";
// import CSS from "./CardsPage.module.css";
import { Box, Toolbar } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import React, { useEffect, useState } from "react";

function CardsPage() {
  const zones = data.zones;
  // let filteredZones = data.zones;
  // const [filter, setFilter] = useState<"none" | "overworld" | "dungion">("none");
  // useEffect(() => {
  //   // filteredZones = zones.filter("kikori forest");
  // }, [filter]);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Masonry columns={/*{xl: 5, lg: 4, md: 3, sm: 2, xs: 1}*/ 3} spacing={2}>
        {Object.entries(zones).map(([zoneName, zoneInfo], index) => (
          <div key={zoneName}>
            <ListGroup key={index} heading={zoneName} items={zoneInfo.spots}></ListGroup>
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

export default CardsPage;
