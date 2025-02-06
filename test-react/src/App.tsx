import Child from './Child';
import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState("");

  const childData = (childdata: string) => {
    setData(childdata);
  };

  return (
    <>
      <h1>This is parent element</h1>
      <h1>{data}</h1>
      <Child sentToChild={childData} />
    </>
  );
}

export default App;

