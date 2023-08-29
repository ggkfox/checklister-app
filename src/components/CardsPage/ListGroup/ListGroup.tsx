import ListItem from "./ListItem/ListItem";
import { Item } from "../../../models/Item";
import "./ListGroup.css";
import { useState, useRef, useEffect } from "react";

interface props {
  items: Item[];
  heading: string;
  isVisible: boolean;
  toggleVisibility: (index: number) => void;
  cardIndex: number;
}

function ListGroup({ items, heading, isVisible, toggleVisibility, cardIndex }: props) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isVisible ? contentRef.current.scrollHeight : 0);
    }
  }, [isVisible]);

  return (
    <>
      <div className="card-header" onClick={() => toggleVisibility(cardIndex)}>
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
