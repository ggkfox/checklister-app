import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { getItemState } from "../../../Atoms";

interface Props {
  iconSet: { name: string; isCounter?: boolean; states?: { src: string; style: React.CSSProperties }[] };
}

const KeyItem = ({ iconSet }: Props) => {
  const [itemState, setItemState] = useAtom(getItemState(iconSet.name));
  const thisItemState = itemState;
  const [curIcon, setCurIcon] = useState(iconSet.states?.[thisItemState.currentState] || null);

  const handleClick = () => {
    console.log("Current State:", itemState.currentState); // Add this line for debugging
    console.log(iconSet.isCounter);
    setItemState({ currentState: (itemState.currentState + 1) % itemState.numOfStates, numOfStates: itemState.numOfStates });
  };

  useEffect(() => {
    setCurIcon(iconSet.states?.[thisItemState.currentState] || null);
  }, [thisItemState.currentState]);

  const renderContent = () => {
    const imgStyle: React.CSSProperties = {
      objectFit: "contain",
      width: "100%",
      height: "100%",
      ...curIcon?.style,
    };

    if (iconSet.isCounter && itemState.currentState > 0) {
      const numberOverlay: React.CSSProperties = {
        position: "absolute",
        bottom: "-14px",
        right: "2px",
        color: "#33ccff", // Light blue color
        fontWeight: "bold", // Bold text
        fontSize: "1.5em", // Font size to make it big
        fontFamily: "'Digital-7', monospace", // Scoreboard-like monospace font
        textShadow: "0 0 5px #8244b8", // Add a text shadow for more prominence
        zIndex: 2,
        userSelect: "none",
      };

      return (
        <>
          <span style={numberOverlay}>{itemState.currentState}</span>
          <img src={curIcon?.src} style={imgStyle} />
        </>
      );
    } else {
      return <img src={curIcon?.src} style={imgStyle} />;
    }
  };

  return (
    <Grid item sx={{ width: "33px", height: "33px", position: "relative" }} onClick={handleClick}>
      {renderContent()}
    </Grid>
  );
};

export default KeyItem;
