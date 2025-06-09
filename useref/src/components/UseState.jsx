import { useEffect, useState } from "react";
const UseState = () => {
  let [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("useState Component Rendered");
  });

  function handleClick() {
    setNumber((n) => n + 1);
  }

  return (
    <div>
      <hr/>
      <button onClick={handleClick}>
        useState <span>{number}</span> 
      </button>
    </div>
  );
};
export default UseState;