import ListGroup from "./ListGroup";
import data from "../../assets/OoT.json";
// import CSS from "./CardsPage.module.css";
import { Box, Toolbar } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import React from "react";

function CardsPage() {
  const groups = data.Zones;

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Masonry columns={/*{xl: 5, lg: 4, md: 3, sm: 2, xs: 1}*/ 3} spacing={2}>
        {Object.entries(groups).map(([groupName, items]) => (
          <div key={groupName}>
            <ListGroup heading={groupName} items={items}></ListGroup>
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

export default CardsPage;
