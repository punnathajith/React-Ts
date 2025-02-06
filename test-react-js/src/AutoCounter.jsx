import { useState, useEffect } from "react";

const AutoCounter = () => {
  const [count, setCount] = useState(0);
  const [intervalTime, setIntervalTime] = useState(1000); 

  useEffect(() => {
    console.log("Effect started");
  
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1); 
      console.log("Counter updated");
    }, intervalTime);
  
    return () => {
      console.log("Cleaning up: Clearing interval");
      clearInterval(intervalId);
    };
  }, [intervalTime]); 
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setIntervalTime(intervalTime === 1000 ? 500 : 1000)}>
        Toggle Speed ({intervalTime}ms)
      </button>
    </div>
  );
};

export default AutoCounter;