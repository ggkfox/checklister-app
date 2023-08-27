import React from "react";

interface props {
  children: string;
  color?: "primary" | "secondary" | "light" | "danger";
  onClick: () => void;
}

function TestButton({ children, color = "primary", onClick }: props) {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default TestButton;
