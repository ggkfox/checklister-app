import ListGroup from "./ListGroup";
import data from "../../assets/OoT.json";
import "./CardsPage.css";
import Masonry from "masonry-layout";
import { useState } from "react";

function CardsPage() {
  const groups = data.Zones;
  var msnry = new Masonry(".grid", {
    columnWidth: 350,
    itemSelector: ".grid-item",
    gutter: 10,
    horizontalOrder: false,
    keepOrder: true,
  });

  const [curState, updateState] = useState(false);
  const reRender = () => {
    updateState(!curState);
    console.log("re-render");
  };

  // /* i used to have the card collapse State here. but mapping was a pain. */
  // const initialVisibilities = Object.keys(groups).map(() => true);
  // const [cardVisibility, setCardVisibility] = useState(initialVisibilities);
  // const toggleCardVisibility = (index: number) => {
  //   const newVisibilities = [...cardVisibility];
  //   newVisibilities[index] = !newVisibilities[index];
  //   setCardVisibility(newVisibilities);
  // };

  return (
    <div className="container-fluid">
      <div className="grid">
        {Object.entries(groups).map(([groupName, items], index) => (
          <div className="grid-item card" key={groupName}>
            <ListGroup heading={groupName} items={items} reRender={reRender}></ListGroup>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsPage;
