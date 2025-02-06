import { useState  } from "react";
import AutoCounter from "./AutoCounter";

const App = () => {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div>
      <button onClick={() => setShowCounter(!showCounter)}>
        Toggle Counter Component
      </button>
      {showCounter && <AutoCounter />}
    </div>
  );
};

export default App;
