import React, { useState, useRef, useEffect } from "react";
import { Item } from "../../../models/Item";
import ListItem from "./ListItem";
import "./ListGroup.css";

interface props {
  items: Item[];
  heading: string;
  reRender: () => void;
}

function ListGroup({ items, heading, reRender }: props) {
  const [isExpanded, setExpanded] = useState(true);
  const contentRef = useRef<HTMLDivElement | null>(null);
  let cardHeight = contentRef.current?.scrollHeight;

  useEffect(() => {
    reRender();
  }, [isExpanded]);

  return (
    <>
      <div className="card-header" onClick={() => setExpanded(!isExpanded)}>
        {heading}
      </div>
      <ul className={"list-group list-group-flush"} style={{ height: isExpanded ? cardHeight : 5 }}>
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
