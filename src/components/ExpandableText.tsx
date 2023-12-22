import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleClicked = () => {
    setExpanded(!expanded);
  };

  if (children.length <= maxChars) {
    return <p>{children}</p>;
  }
  const text = expanded ? children : children.substring(0, maxChars);

  return (
    <>
      <div>
        {text}...
        <button onClick={handleClicked} className="btn btn-secondary">
          {expanded ? "less" : "more"}
        </button>
      </div>
    </>
  );
};

export default ExpandableText;
