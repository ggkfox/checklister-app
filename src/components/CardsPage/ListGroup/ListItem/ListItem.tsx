import { AgeType, Item } from "../../../../models/Types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CSS from "./ListItem.module.css";
import ListItem1 from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { faSun, faMoon, faC, faA, faBomb, faMusic, faSpider, faHeart, faCow } from "@fortawesome/free-solid-svg-icons";
import { Box, Divider, ListItemButton } from "@mui/material";
import { useState } from "react";
import { StrikethroughS } from "@mui/icons-material";

interface props {
  item: Item;
  isExpanded: boolean;
  ageFilter: AgeType;
}

function ListItem({ item, isExpanded, ageFilter }: props) {
  const [isChecked, setChecked] = useState(false);
  const handleCheckmark = () => {
    setChecked(!isChecked);
  };

  return (
    <>
      <Box sx={{ ...(item.tags?.includes(ageFilter) && { display: "none" }) }}>
        <Divider sx={{ width: "95%", display: "block", marginRight: "auto", marginLeft: "auto", justifyContent: "center" }} />
        <ListItem1 sx={{ height: 25, width: "100%", padding: 0 }}>
          <ListItemButton disabled={!isExpanded} sx={{ padding: 1, width: "100%", height: "100%" }} onClick={handleCheckmark} dense>
            <Checkbox checked={isChecked} edge="start" size="small" color="primary" disableRipple />
            <ListItemText sx={{ ...(isChecked && { textDecoration: "line-through" }) }}>{item.name}</ListItemText>
            {/* {item.tags?.includes("chest") && <FontAwesomeIcon className={CSS.Icon} icon={faBox} />} */}
            {item.tags?.includes("heart") && <FontAwesomeIcon className={CSS.icon1} icon={faHeart} />}
            {item.tags?.includes("spider") && <FontAwesomeIcon className={CSS.icon1} icon={faSpider} />}
            {/* {item.tags?.includes("shop") && <FontAwesomeIcon className={CSS.icon1} icon={faSackDollar} />} */}
            {item.tags?.includes("song") && <FontAwesomeIcon className={CSS.icon1} icon={faMusic} />}
            {item.tags?.includes("cow") && <FontAwesomeIcon className={CSS.icon1} icon={faCow} />}
            <div>
              {item.tags?.includes("day") && <FontAwesomeIcon className={CSS.icon2} icon={faSun} />}
              {item.tags?.includes("night") && <FontAwesomeIcon className={CSS.icon2} icon={faMoon} />}
              {/* {item.tags?.includes("soil") && <FontAwesomeIcon className={CSS.icon2} icon={faSeedling} />} */}
              {/* {item.tags?.includes("grotto") && <FontAwesomeIcon className={CSS.icon2} icon={faCircleDown} />} */}
              {item.tags?.includes("bomb") && <FontAwesomeIcon className={CSS.icon2} icon={faBomb} />}
              {item.tags?.includes("child") && <FontAwesomeIcon className={CSS.icon2} icon={faC} />}
              {item.tags?.includes("adult") && <FontAwesomeIcon className={CSS.icon2} icon={faA} />}
            </div>
          </ListItemButton>
        </ListItem1>
      </Box>
    </>
  );
}

export default ListItem;
