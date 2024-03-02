import { useState } from "react";
import Button from "./Button.jsx";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = (value) => {
    if (typeof value !== "number") {
    } else {
      setCount((count) => count + value);
    }
  };
  const decrement = (value) => {
    if (typeof value !== "number") {
    } else {
      setCount((count) => count + value);
    }
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Count value is: {count}</h1>
      <Button handleClick={() => increment(5)} text="Increment" />
      <Button handleClick={() => decrement(5)} text="Decrement" />
      <Button handleClick={() => reset(0)} text="Reset" />
    </div>
  );
}

export default Counter;
