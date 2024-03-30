import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  function handleClickButton(event) {
    event.stopPropagation();
    setNumber(number + 1);
  }
  return (
    <>
      <h1 style={{ color: "white" }}>{number}</h1>
      <button onClick={handleClickButton}>Add</button>
    </>
  );
}
export default Counter;
