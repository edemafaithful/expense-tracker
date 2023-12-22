import { useState } from "react";

const AddExpenses = () => {
  const [addList, setAddList] = useState({
    Description: "",
    Amount: parseInt(""),
    Category: "",
    Action: "",
  });

  const handleClick = () => {
    setAddList({
        ...addList,
        
    })
  }
  return (
    <>
      <div>AddExpenses</div>
      <button onClick={handleClick}>add</button>
    </>
  );
};

export default AddExpenses;
