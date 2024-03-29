import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import KeyItem from "./KeyItem";
import keyItems from "../../../assets/OOT/index";

const ItemTracker = () => {
  return (
    <>
      {keyItems.map((group, index) => (
        <Box key={"0" + index} paddingTop={1}>
          <Grid container justifyContent={"center"} gap={0.7}>
            {group.map((iconSet, index) => (
              <KeyItem key={"1" + index} iconSet={iconSet} />
            ))}
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default ItemTracker;
