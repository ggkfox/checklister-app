import React, { useState, useRef, useEffect } from "react";
import { Item } from "../../../models/Types";
import ListItem from "./ListItem";
// import CSS from "./ListGroup.module.css";
import { Card, Collapse, Divider, Hidden, List, ListItemButton, Typography } from "@mui/material";
import { ExpandLess, ExpandMore, Key } from "@mui/icons-material";

interface props {
  items: Item[];
  heading: string;
}

function ListGroup({ items, heading }: props) {
  const [isExpanded, setExpanded] = useState(true);

  return (
    <Card sx={{ boxShadow: 4 }}>
      <ListItemButton sx={{ background: "#f6f6f6", justifyContent: "space-between" }} onClick={() => setExpanded(!isExpanded)}>
        <Typography sx={{ margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} variant="h6" gutterBottom>
          {heading}
        </Typography>
        {isExpanded ? <ExpandMore /> : <ExpandLess />}
      </ListItemButton>
      <Collapse in={isExpanded} sx={{ paddingBottom: 1 }}>
        <List sx={{ padding: 0 }}>
          {items.map((item, index) => (
            <ListItem key={index} item={item} isExpanded={isExpanded}></ListItem>
          ))}
        </List>
      </Collapse>
    </Card>
  );
}

export default ListGroup;
