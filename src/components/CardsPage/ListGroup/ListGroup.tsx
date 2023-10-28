import { useState } from "react";
import { AgeType, ZoneType } from "../../../models/Types";
// import Spot from "./Spot";
import { Card, Collapse, List, ListItemButton, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Zone } from "../../../models/Types";
import React from "react";
import Spot from "./Spot";

interface props {
  thisZone: Zone;
  zoneFilter: ZoneType;
  ageFilter: AgeType;
}

function ListGroup({ thisZone, zoneFilter, ageFilter }: props) {
  const [isExpanded, setExpanded] = useState(true);

  return (
    <Card sx={{ boxShadow: "0 0 12px rgba(130, 68, 184, 0.4)", maxWidth: "600px", ...(zoneFilter !== "all" && thisZone.type !== zoneFilter && { display: "none" }) }}>
      <ListItemButton sx={{ justifyContent: "space-between" }} onClick={() => setExpanded(!isExpanded)}>
        <Typography sx={{ margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} variant="h6" gutterBottom>
          {thisZone.name}
        </Typography>
        {isExpanded ? <ExpandMore /> : <ExpandLess />}
      </ListItemButton>
      <Collapse in={isExpanded} sx={{ paddingBottom: 1 }}>
        <List sx={{ padding: 0 }}>
          {thisZone.items.map((item, index) => (
            <Spot key={index} item={item} isExpanded={isExpanded} ageFilter={ageFilter} zoneName={thisZone.name} index={index}></Spot>
          ))}
        </List>
      </Collapse>
    </Card>
  );
}

export default React.memo(ListGroup);
