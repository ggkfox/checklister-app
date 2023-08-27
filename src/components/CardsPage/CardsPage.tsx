import ListGroup from "./ListGroup/ListGroup";
import data from "../../assets/OoT.json";
import "./CardsPage.css";
import React, { useEffect, useState } from "react";

const groups = data.Zones;

const gridBreakpoints = {
  default: 5,
  1900: 4,
  1450: 3,
  1100: 2,
  750: 1,
};

const CardsPage = () => {
  return (
    <div className="container-fluid">
      {Object.entries(groups).map(([groupName, items]) => (
        <div className="flex-item card" key={groupName}>
          <ListGroup heading={groupName} items={items}></ListGroup>
        </div>
      ))}
    </div>
  );
};

export default CardsPage;
