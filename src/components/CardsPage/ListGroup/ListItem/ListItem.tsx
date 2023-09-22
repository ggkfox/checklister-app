import { AgeType, Item } from "../../../../models/Types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CSS from "./ListItem.module.css";
import ListItem1 from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { faSun, faMoon, faC, faA, faBomb, faMusic, faSpider, faHeart, faCow } from "@fortawesome/free-solid-svg-icons";
import { Box, Divider, ListItemButton } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useItemStateContext } from "../../../../contexts/ItemStateContext";
import { Parser } from "expr-eval";

interface props {
  item: Item;
  isExpanded: boolean;
  ageFilter: AgeType;
}

function ListItem({ item, isExpanded, ageFilter }: props) {
  const { itemStates } = useItemStateContext();

  const [isChecked, setChecked] = useState<boolean>(false);
  const handleCheckmark = () => {
    setChecked(!isChecked);
  };
  const requirements: string | undefined = useMemo(() => {
    if (!item.requirements) return undefined;
    return item.requirements;
  }, [item.requirements]);

  const scope = useMemo(() => {
    const scopedItemStates: { [key: string]: number } = {};
    if (requirements) {
      const requiredItems = requirements.split(" ");
      if (requiredItems.length === 0) return undefined;
      for (const itemName of requiredItems) {
        if (itemStates.hasOwnProperty(itemName)) {
          scopedItemStates[itemName] = itemStates[itemName].currentState;
        }
      }
      return scopedItemStates;
    }
  }, [itemStates]);

  const checkIfCanDo = (): boolean => {
    if (!requirements) return true;

    try {
      var parser = new Parser({
        operators: {
          // These default to true, but are included to be explicit
          add: false,
          concatenate: false,
          conditional: false,
          divide: false,
          factorial: false,
          multiply: false,
          power: false,
          remainder: false,
          subtract: false,

          // Disable and, or, not, <, ==, !=, etc.
          logical: true,
          comparison: true,

          // Disable 'in' and = operators
          in: false,
          assignment: false,
        },
      });
      const expr = parser.parse(requirements);
      const result = expr.evaluate(scope);
      console.log(item, result);

      if (result === true || result === false) {
        return result; // If the result is true or false, return it directly
      } else {
        return result >= 1; // Otherwise, check if it's greater than or equal to 1
      }
    } catch (error) {
      console.log(error);
      return false; // Return false in case of an error during parsing or evaluation
    }
  };
  const [highlight, setHighlight] = useState<boolean>(checkIfCanDo());
  useEffect(() => {
    setHighlight(checkIfCanDo() && !isChecked);
  }, [itemStates, isChecked]);

  return (
    <>
      <Box sx={{ ...(item.tags?.includes(ageFilter) && { display: "none" }), ...(highlight && { backgroundColor: "rgba(250, 255, 105, 0.3)" }) }}>
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
