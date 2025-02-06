type ChildProps = {
  sentToChild: (data: string) => void;
};

const Child = ({ sentToChild }: ChildProps) => {
  const toParent = () => {
    sentToChild("Hello from Child!");
  };

  return (
    <>
      <h1>Child Component</h1>
      <button onClick={toParent}>Send Data to Parent</button>
    </>
  );
};

export default Child;
