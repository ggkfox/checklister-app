import ListGroup from "./ListGroup/ListGroup";
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
  });

  const initialVisibilities = Object.keys(groups).map(() => true);
  const [cardVisibility, setCardVisibility] = useState(initialVisibilities);
  const toggleCardVisibility = (index: number) => {
    const newVisibilities = [...cardVisibility];
    newVisibilities[index] = !newVisibilities[index];
    setCardVisibility(newVisibilities);
  };

  return (
    <div className="container-fluid">
      <div className="grid">
        {Object.entries(groups).map(([groupName, items], index) => (
          <div className="grid-item card" key={groupName}>
            <ListGroup heading={groupName} items={items} isVisible={cardVisibility[index]} toggleVisibility={() => toggleCardVisibility(index)} cardIndex={index}></ListGroup>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsPage;
