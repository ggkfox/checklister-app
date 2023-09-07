import Grid from "@mui/material/Grid";
import React from "react";
import icons from "../../../assets/ootItems/index";

const ItemTracker = () => {
  return (
    <Grid container justifyContent={"center"} gap={1}>
      {icons.map((icon, index) => (
        <Grid item key={index} sx={{ width: "33px", height: "33px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={icon} alt={`Icon ${index}`} style={{ width: "100%", height: "100%" }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemTracker;
