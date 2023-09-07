import Grid from "@mui/material/Grid";
import keyItems from "../../../assets/ootItems/index";
import Box from "@mui/material/Box";

const ItemTracker = () => {
  return (
    <>
      {keyItems.map((group) => (
        <Box paddingTop={2.5}>
          <Grid container justifyContent={"center"} gap={1}>
            {group.map((icon, index2) => (
              <Grid item key={index2} sx={{ width: "33px", height: "33px", display: "flex" }}>
                <img src={icon} alt={`Icon ${index2}`} style={{ objectFit: "contain", filter: "grayscale(15%) brightness(60%)" }} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default ItemTracker;
