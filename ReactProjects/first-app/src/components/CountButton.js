import React, { useState } from "react";

const CountButton = (props) => {
  const [currentCount, setCurrentCount] = useState(0);

  const handleClick = () => {
    setCurrentCount(currentCount + props.incrementBy);
  };

  const handleClick2 = () => {
    setCurrentCount(currentCount - props.incrementBy);
  };

  return (
    <div>
      <button onClick={handleClick}>+{props.incrementBy}</button>
      <button onClick={handleClick2}>-{props.incrementBy}</button>
      <div>{currentCount}</div>
    </div>
  );
};

export default CountButton;
