import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { getItemState } from "../../../Atoms";

interface Props {
  iconSet: { name: string; states: { src: string; style: React.CSSProperties }[] };
}

const KeyItem = ({ iconSet }: Props) => {
  const [itemState, setItemState] = useAtom(getItemState(iconSet.name));
  const thisItemState = itemState;
  const [curIcon, setCurIcon] = useState(iconSet.states[thisItemState.currentState]);

  const handleClick = () => {
    setItemState({ currentState: (itemState.currentState + 1) % itemState.numOfStates, numOfStates: itemState.numOfStates });
  };

  useEffect(() => {
    setCurIcon(iconSet.states[thisItemState.currentState]);
  }, [thisItemState.currentState]);

  return (
    <>
      <Grid item sx={{ width: "33px", height: "33px", display: "flex" }}>
        <img src={curIcon.src} style={{ objectFit: "contain", ...curIcon.style }} onClick={handleClick} />
      </Grid>
    </>
  );
};

export default KeyItem;
