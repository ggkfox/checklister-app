import ListGroup from "./ListGroup/ListGroup";
import data from "../../assets/OoT.json";
import "./CardsPage.css";

const groups = data.Zones;

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
