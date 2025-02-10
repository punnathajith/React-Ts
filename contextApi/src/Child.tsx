import { useContext } from "react";
import { userContext } from "./App";

const Child = () => {
  const context = useContext(userContext);

  if (!context) {
    return <p>Context not available</p>;
  }

  return (
    <>
      <h1>Child: {context.user}</h1>
    </>
  );
}

export default Child;