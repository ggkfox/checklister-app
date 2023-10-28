import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { getItemState } from "../../../Atoms";

interface Props {
  iconSet: { name: string; isCounter?: boolean; states?: { src: string; style: React.CSSProperties }[] };
}

const KeyItem = ({ iconSet }: Props) => {
  const [itemState, setItemState] = useAtom(getItemState(iconSet.name));
  const [nextState, setNextState] = useState((itemState.currentState + 1) % itemState.numOfStates);

  const [curIcon, setCurIcon] = useState(iconSet.states?.[itemState.currentState] || null);
  const [nextIcon, setNextIcon] = useState(iconSet.states?.[nextState] || null);

  const renderContent = (arg: any): JSX.Element => {
    const imgStyle: React.CSSProperties = {
      objectFit: "contain",
      width: "100%",
      height: "100%",
      ...arg?.style,
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
          <img src={arg?.src} style={imgStyle} />
        </>
      );
    } else {
      return <img src={arg?.src} style={imgStyle} />;
    }
  };

  const [curSrc, setCurSrc] = useState<JSX.Element | null>(renderContent(curIcon));
  const [nextSrc, setNextSrc] = useState<JSX.Element | null>(renderContent(nextIcon));

  const handleClick = () => {
    setCurSrc(nextSrc);
    setItemState({ currentState: nextState, numOfStates: itemState.numOfStates });
  };

  useEffect(() => {
    setCurIcon(nextIcon);
    setNextState((itemState.currentState + 1) % itemState.numOfStates);
    setNextIcon(iconSet.states?.[nextState] || null);
    setNextSrc(renderContent(nextIcon));
  }, [itemState.currentState]);

  return (
    <Grid item sx={{ width: "33px", height: "33px", position: "relative" }} onClick={handleClick}>
      {curSrc}
    </Grid>
  );
};

export default KeyItem;
