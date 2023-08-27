import ListItem from "./ListItem/ListItem";
import { Item } from "../../../models/Item";
import "./ListGroup.css";
import { useState, useRef, useEffect } from "react";

interface props {
  items: Item[];
  heading: string;
}

function ListGroup({ items, heading }: props) {
  const [isVisible, setIsVisible] = useState(true);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isVisible ? contentRef.current.scrollHeight : 0);
    }
  }, [isVisible]);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="card-header" onClick={toggleVisibility}>
        {heading}
      </div>
      <ul className={"list-group list-group-flush"} style={{ height: isVisible ? contentHeight : 5 }}>
        <div ref={contentRef}>
          {items.map((item) => (
            <ListItem item={item} key={item.name}></ListItem>
          ))}
        </div>
      </ul>
    </>
  );
}

export default ListGroup;
