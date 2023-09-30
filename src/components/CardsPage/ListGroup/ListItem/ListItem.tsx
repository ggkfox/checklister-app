import { AgeType, Item } from "../../../../models/Types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faC, faA, faBomb, faMusic, faSpider, faHeart, faCow } from "@fortawesome/free-solid-svg-icons";
import CSS from "./ListItem.module.css";
import { Box, Divider, ListItem as ListItem1, ListItemButton, ListItemText, Checkbox } from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import { Parser } from "expr-eval";
import { getItemState, useMultipleItemStates } from "../../../../Atoms";
import { useAtom } from "jotai";

interface props {
  item: Item;
  isExpanded: boolean;
  ageFilter: AgeType;
  zoneName: string;
  index: number;
}

function ListItem({ item, isExpanded, ageFilter, zoneName, index }: props) {
  //this spot state.
  const spotState = useMemo(() => getItemState(`${zoneName.replace(/\s+/g, "")}${index}`), [zoneName, index]);
  const [{ currentState: isChecked }, setChecked] = useAtom(spotState);
  const handleCheckmark = () => setChecked((prevChecked) => ({ currentState: Number(!prevChecked.currentState), numOfStates: 2 }));

  //handle requirements
  const addWhitespace = (input: string): string => {
    return input.replace(/\(/g, " ( ").replace(/\)/g, " ) ").replace(/<=/g, " <= ").replace(/>=/g, " >= ").replace(/==/g, " == ").replace(/!=/g, " != ").trim();
  };
  const listOfRequirements = useMemo(() => {
    if (!item.requirements) return [];
    const normalizedRequirements = addWhitespace(item.requirements);
    return normalizedRequirements.split(" ");
  }, [item.requirements]);

  const itemStates = useMultipleItemStates(listOfRequirements);

  const scope = useMemo(() => {
    const scopedItemStates: { [key: string]: number } = {};
    listOfRequirements.forEach((token) => {
      if (itemStates[token]) scopedItemStates[token] = itemStates[token].currentState || 0;
    });
    return scopedItemStates;
  }, [listOfRequirements, itemStates]);

  const checkIfCanDo = (): boolean => {
    if (!item?.requirements) return true;
    try {
      const parser = new Parser({
        operators: {
          logical: true,
          comparison: true,
        },
      });
      const expr = parser.parse(item.requirements);
      const result = expr.evaluate(scope);
      return result === true || result >= 1;
    } catch (error) {
      console.error("error for item:", item.name);
      console.error("Error item's requirements:", item.requirements);
      return false;
    }
  };

  const [highlight, setHighlight] = useState<boolean>(checkIfCanDo());
  useEffect(() => {
    setHighlight(checkIfCanDo() && !isChecked);
  }, [isChecked, itemStates]);

  return (
    <Box sx={{ ...(item.tags?.includes(ageFilter) && { display: "none" }), ...(highlight && { backgroundColor: "rgba(250, 255, 105, 0.2)" }) }}>
      <Divider sx={{ width: "95%", display: "block", marginRight: "auto", marginLeft: "auto", justifyContent: "center" }} />
      <ListItem1 sx={{ height: 25, width: "100%", padding: 0 }}>
        <ListItemButton disabled={!isExpanded} sx={{ padding: 1, width: "100%", height: "100%" }} onClick={handleCheckmark} dense>
          <Checkbox checked={!!isChecked} edge="start" size="small" color="primary" disableRipple />
          <ListItemText sx={{ ...(!!isChecked && { textDecoration: "line-through" }) }}>{item.name}</ListItemText>
          {/* Display logic for icons can be further refactored, but for now, I've just cleaned up the current structure. */}
          {item.tags?.includes("heart") && <FontAwesomeIcon className={CSS.icon1} icon={faHeart} />}
          {item.tags?.includes("spider") && <FontAwesomeIcon className={CSS.icon1} icon={faSpider} />}
          {item.tags?.includes("song") && <FontAwesomeIcon className={CSS.icon1} icon={faMusic} />}
          {item.tags?.includes("cow") && <FontAwesomeIcon className={CSS.icon1} icon={faCow} />}
          <div>
            {item.tags?.includes("day") && <FontAwesomeIcon className={CSS.icon2} icon={faSun} />}
            {item.tags?.includes("night") && <FontAwesomeIcon className={CSS.icon2} icon={faMoon} />}
            {item.tags?.includes("bomb") && <FontAwesomeIcon className={CSS.icon2} icon={faBomb} />}
            {item.tags?.includes("child") && <FontAwesomeIcon className={CSS.icon2} icon={faC} />}
            {item.tags?.includes("adult") && <FontAwesomeIcon className={CSS.icon2} icon={faA} />}
          </div>
        </ListItemButton>
      </ListItem1>
    </Box>
  );
}

export default ListItem;
