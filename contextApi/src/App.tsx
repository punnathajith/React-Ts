
import { createContext, useState } from 'react'
import './App.css'
import Child from './Child';
import Login from './Login';

interface UserContextType {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}


export const userContext = createContext<UserContextType | null>(null);

function App() {
  
  const [user,setUser] = useState("");

  return (
    <userContext.Provider value={{user,setUser}}>
        <Login/>
        <Child/>
    </userContext.Provider>
  )
}

export default App
