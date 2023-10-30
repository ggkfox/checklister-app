import CSS from "./Spot.module.css";
import React, { useEffect, useState, useMemo, useRef } from "react";
import { useAtom } from "jotai";
import { getItemState } from "../../../../Atoms";
import { AgeType, Item } from "../../../../models/Types";
import { useRequirementsInfo } from "./requirementsUtil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faC, faA, faBomb, faMusic, faSpider, faHeart, faCow } from "@fortawesome/free-solid-svg-icons";
import { Box, Divider, ListItem, ListItemButton, ListItemText, Checkbox, Button, Hidden } from "@mui/material";
import { useTheme } from "@mui/material";

interface Props {
  item: Item;
  isExpanded: boolean;
  ageFilter: AgeType;
  zoneName: string;
  index: number;
}

const Spot: React.FC<Props> = ({ item, isExpanded, ageFilter, zoneName, index }) => {
  // State management
  const spotState = useMemo(() => getItemState(`${zoneName.replace(/\s+/g, "")}${index}`), [zoneName, index]);
  const [{ currentState: isChecked }, setChecked] = useAtom(spotState);
  const [highlight, setHighlight] = useState(false);
  const listItemButtonRef = useRef<HTMLDivElement>(null); //this is the whole elements button, so that i can blur it when i click enter in textfield.
  const [isEditable, setIsEditable] = useState(false);
  const [textValue, setTextValue] = useState("");
  const textInputRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();

  // Requirements and scope
  const { canDo, itemStates } = useRequirementsInfo(item.requirements);

  useEffect(() => {
    setHighlight(canDo && !isChecked);
  }, [isChecked, itemStates]);

  useEffect(() => {
    if (isEditable && textInputRef.current) {
      textInputRef.current.focus();
    }
  }, [isEditable]);

  const handleCheckmark = () => {
    setChecked((prevChecked: any) => ({ currentState: Number(!prevChecked.currentState), numOfStates: 2 })); //numOfStates is here bc it must be same type as item states.
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };

  const handleEnterButton = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setIsEditable(false);
      listItemButtonRef.current!.blur();
    }
  };

  return (
    <>
      <Divider sx={{ width: "95%", marginRight: "auto", marginLeft: "auto", justifyContent: "center" }} />
      <Box
        className={CSS.thisComponent}
        sx={{ display: "block", position: "relative", overflow: "hidden", padding: 0, ...(item.tags?.includes(ageFilter) && { display: "none" }) }}
      >
        <ListItem
          className={CSS.ListItem}
          sx={{
            position: "relative",
            display: "block",
            minHeight: "10px",
            width: "100%",
            padding: 0,
            ...(highlight && { backgroundColor: theme.palette.primary.light }),
          }}
        >
          <ListItemButton
            ref={listItemButtonRef}
            sx={{
              "&.Mui-focusVisible": {
                backgroundColor: "transparent",
              },
              paddingRight: "4px",
              paddingLeft: "2px",
              display: "flex",
              justifyContent: "space-between",
              overflow: "Hidden",
            }}
            disabled={!isExpanded}
            onClick={handleCheckmark}
            dense
          >
            <Box sx={{ overflow: "hidden", whiteSpace: "nowrap" }}>
              <Checkbox sx={{ padding: "1px" }} checked={!!isChecked} size="small" color="primary" disableRipple />
              <ListItemText sx={{ display: "inline-block", whiteSpace: "nowrap", ...(!!isChecked && { textDecoration: "line-through" }) }}>
                {item.name}
                {isEditable ? (
                  <input
                    type="text"
                    ref={textInputRef}
                    value={textValue}
                    placeholder="seen item"
                    onChange={handleChange}
                    onBlur={() => setIsEditable(false)}
                    onKeyDown={handleEnterButton}
                    style={{ color: "green" }}
                  />
                ) : (
                  <span className={CSS.notes} style={{ color: "green" }}>
                    {textValue ? `  [${textValue}]` : ``}
                  </span>
                )}
              </ListItemText>
            </Box>
            <Box sx={{ whiteSpace: "nowrap" }}>
              {/* Display logic for icons can be further refactored, but for now, I've just cleaned up the current structure. */}
              {item.tags?.includes("child") && <FontAwesomeIcon className={CSS.icon} icon={faC} />}
              {item.tags?.includes("adult") && <FontAwesomeIcon className={CSS.icon} icon={faA} />}
              {item.tags?.includes("heart") && <FontAwesomeIcon className={CSS.icon} icon={faHeart} />}
              {item.tags?.includes("spider") && <FontAwesomeIcon className={CSS.icon} icon={faSpider} />}
              {item.tags?.includes("song") && <FontAwesomeIcon className={CSS.icon} icon={faMusic} />}
              {item.tags?.includes("cow") && <FontAwesomeIcon className={CSS.icon} icon={faCow} />}
              {item.tags?.includes("day") && <FontAwesomeIcon className={CSS.icon} icon={faSun} />}
              {item.tags?.includes("night") && <FontAwesomeIcon className={CSS.icon} icon={faMoon} />}
              {item.tags?.includes("bomb") && <FontAwesomeIcon className={CSS.icon} icon={faBomb} />}
            </Box>
          </ListItemButton>
          <Button sx={{ position: "absolute", left: "100%", top: "50%", transform: "translateY(-50%)", minWidth: 0 }} onClick={() => setIsEditable(true)}>
            🖉
          </Button>
        </ListItem>
      </Box>
    </>
  );
};

export default Spot;
