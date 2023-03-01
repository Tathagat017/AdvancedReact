import React, { useState, useEffect } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("componenet re render");
  useEffect(() => {
    console.log("printing ");
  }, []);

  function handleInc() {
    setCount(() => count + 1);
  }
  const handleDec = () => {
    setCount(() => count - 1);
  };

  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>reduce</button>
    </div>
  );
};

export default Counter;
