import { Item } from "../../../../models/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CSS from "./ListItem.module.css";
import ListItem1 from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { faSun, faMoon, faSeedling, faC, faA, faCircleDown, faBomb, faMusic, faCloudBolt, faSpider, faHeart, faBox, faCow, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { ListItemButton } from "@mui/material";
import { useState } from "react";

interface props {
  item: Item;
  isExpanded: boolean;
}

function ListItem({ item, isExpanded }: props) {
  const [isChecked, setChecked] = useState(false);
  const handleCheckmark = () => {
    setChecked(!isChecked);
  };

  return (
    <ListItem1 sx={{ height: 25, width: "100%", padding: 0, background: "white" }}>
      <ListItemButton disabled={!isExpanded} sx={{ padding: 1, width: "100%", height: "100%" }} onClick={handleCheckmark} dense>
        <Checkbox checked={isChecked} edge="start" size="small" color="primary" disableRipple />
        <ListItemText>{item.name}</ListItemText>
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
  );
}

export default ListItem;
