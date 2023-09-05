import React, { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  //   state Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   event  handlers
  //const handleClick = (event: MouseEvent) => console.log(event)
  //   items = [];
  // conditional rendering
  return (
    <>
      <h1 className="text-3xl font-bold">{heading}</h1>
      {/* if the condition on the LHS is false nothing is returned & if it is true the condition on the RHS is returned */}
      {items.length === 0 && <p>No Item Found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active" 
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            aria-current="true">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
