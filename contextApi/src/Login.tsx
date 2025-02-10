import { useContext, useState } from "react"
import { userContext } from "./App"


const Login = ()=>{
  const context = useContext(userContext);
  const [value,setValue] = useState("");
  
  if (!context) {
    return <p>Context not available</p>;
  }

  const { setUser } = context;

  const submithandle = (e:React.FormEvent) =>{
    e.preventDefault();
    setUser(value)
  }

  return(
    <div>
      <form onSubmit={submithandle}>
      <input 
      type="text"
      value={value}
      onChange={(e)=>setValue(e.target.value)}
      />
      <button 
      type="submit"
      >submit</button>
      </form>
    </div>
  )
}

export default Login;