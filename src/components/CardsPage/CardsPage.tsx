import ListGroup from "./ListGroup";
import data from "../../assets/OoT.json";
import { Zone, ZoneType } from "../../models/Types";
// import CSS from "./CardsPage.module.css";
import { Box, Toolbar } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import React, { useEffect, useState } from "react";

interface props {
  zoneFilter: ZoneType;
}

function CardsPage(props: props) {
  const { zoneFilter } = props;
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
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Masonry columns={/*{xl: 5, lg: 4, md: 3, sm: 2, xs: 1}*/ 3} spacing={2}>
        {filteredZones.map((zoneInfo, index) => (
          <ListGroup key={index} heading={zoneInfo.name} items={zoneInfo.items}></ListGroup>
        ))}
      </Masonry>
    </Box>
  );
}

export default CardsPage;
