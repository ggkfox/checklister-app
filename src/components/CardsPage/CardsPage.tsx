import ListGroup from "./ListGroup";
import data from "../../assets/OoT.json";
import "./CardsPage.module.css";
import { Box } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

function CardsPage() {
  const groups = data.Zones;

  return (
    <Box>
      <Masonry columns={{ xl: 5, lg: 4, md: 3, sm: 2, xs: 1 }} spacing={2}>
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
