import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <ul className="list-group">
        <h1 className="text-2xl">{heading}</h1>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active cursor-pointer"
                : "list-group-item cursor-pointer"
            }
            key={item}
            onClick={() => { 
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item} 
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
