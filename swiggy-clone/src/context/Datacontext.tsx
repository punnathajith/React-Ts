import { createContext } from "react";
import { useState } from "react";


const DataContext = createContext();

const DataContextProvider = ({children})=>{
  const [data1,setData1] = useState([]);
  return(
    <DataContext.Provider value={{data1,setData1}}>
      {children}
    </DataContext.Provider>
  )
}

export {DataContext,DataContextProvider};