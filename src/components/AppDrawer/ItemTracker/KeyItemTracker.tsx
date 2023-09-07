import Grid from "@mui/material/Grid";
import keyItems from "../../../assets/ootItems/index";
import Box from "@mui/material/Box";
import KeyItem from "./KeyItem";

const ItemTracker = () => {
  return (
    <>
      {keyItems.map((group) => (
        <Box paddingTop={2.5}>
          <Grid container justifyContent={"center"} gap={1}>
            {group.map((icon, index) => (
              <Grid item key={index} sx={{ width: "33px", height: "33px", display: "flex" }}>
                <KeyItem iconSet={icon} index={index} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default ItemTracker;
