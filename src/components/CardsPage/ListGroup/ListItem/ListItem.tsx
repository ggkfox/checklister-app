import { Item } from "../../../../models/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ListItem.css";
import {
  faSun,
  faMoon,
  faSeedling,
  faC,
  faA,
  faCircleDown,
  faBomb,
  faMusic,
  faCloudBolt,
  faSpider,
  faHeart,
  faBox,
  faCow,
  faSackDollar,
  faSkull,
} from "@fortawesome/free-solid-svg-icons";

// const element = <FontAwesomeIcon icon={faEnvelope} />;

interface props {
  item: Item;
}

const styles = {
  padding: "2px 0",
};

function ListItem({ item }: props) {
  return (
    <li className="list-group-item" style={styles}>
      <div className="row" style={{ padding: "0 3px" }}>
        <div className="label-section col-md-9">
          <label className="form-check-label" style={{ cursor: "pointer" }} htmlFor={item.name}>
            <input className="form-check-input" type="checkbox" value="" id={item.name} />
            <span className="noselect" style={{ margin: "0 5px" }}>
              {item.name}
            </span>
            {item.tags?.includes("chest") && <FontAwesomeIcon icon={faBox} className={"group-1-icon"} />}
            {item.tags?.includes("heart") && <FontAwesomeIcon icon={faHeart} className={"group-1-icon"} />}
            {item.tags?.includes("spider") && <FontAwesomeIcon icon={faSpider} className={"group-1-icon"} />}
            {item.tags?.includes("shop") && <FontAwesomeIcon icon={faSackDollar} className={"group-1-icon"} />}
            {item.tags?.includes("song") && <FontAwesomeIcon icon={faMusic} className={"group-1-icon"} />}
            {item.tags?.includes("cow") && <FontAwesomeIcon icon={faCow} className={"group-1-icon"} />}
          </label>
        </div>
        <div className="col-md-3">
          {item.tags?.includes("day") && <FontAwesomeIcon className="group-2-icon float-end" icon={faSun} />}
          {item.tags?.includes("night") && <FontAwesomeIcon className="group-2-icon float-end" icon={faMoon} />}
          {item.tags?.includes("soil") && <FontAwesomeIcon className="group-2-icon float-end" icon={faSeedling} />}
          {item.tags?.includes("grotto") && <FontAwesomeIcon className="group-2-icon float-end" icon={faCircleDown} />}
          {item.tags?.includes("bomb") && <FontAwesomeIcon className="group-2-icon float-end" icon={faBomb} />}
          {item.tags?.includes("child") && <FontAwesomeIcon className="group-2-icon float-end" icon={faC} />}
          {item.tags?.includes("adult") && <FontAwesomeIcon className="group-2-icon float-end" icon={faA} />}
        </div>
      </div>
    </li>
  );
}

export default ListItem;
