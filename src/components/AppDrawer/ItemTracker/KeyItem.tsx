import React, { useState } from "react";

interface props {
  iconSet: { src: string; style: React.CSSProperties }[];
  index: number;
}

const KeyItem = ({ iconSet, index }: props) => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const handleClick = () => {
    setCurrentIconIndex((prevIndex) => (prevIndex + 1) % iconSet.length);
  };

  const currentIcon = iconSet[currentIconIndex];

  return <img src={currentIcon.src} alt={`Icon ${currentIconIndex}`} style={{ objectFit: "contain", ...currentIcon.style }} onClick={handleClick} />;
};

export default KeyItem;
