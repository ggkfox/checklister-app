import Grid from "@mui/material/Grid";
import React, { useContext, useEffect, useState } from "react";
import { useItemStateContext } from "../../../contexts/ItemStateContext";

interface Props {
  iconSet: { name: string; states: { src: string; style: React.CSSProperties }[] };
}

const KeyItem = ({ iconSet }: Props) => {
  const { itemStates, incrementItemState } = useItemStateContext();
  const thisItemState = itemStates[iconSet.name];
  const [curIcon, setCurIcon] = useState(iconSet.states[thisItemState.currentState]);

  const handleClick = () => {
    incrementItemState(iconSet.name);
  };

  useEffect(() => {
    setCurIcon(iconSet.states[thisItemState.currentState]);
  }, [itemStates]);

  return (
    <>
      <Grid item sx={{ width: "33px", height: "33px", display: "flex" }}>
        <img src={curIcon.src} style={{ objectFit: "contain", ...curIcon.style }} onClick={handleClick} />
      </Grid>
    </>
  );
};

export default KeyItem;
