import { useContext, useState } from "react"
import { UserContext } from "./context/UserContext";



function Login() {
  const {user,setUser} = useContext(UserContext);
  const [value,setValue] = useState("");
  const [password,setPassword] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    setUser({value,password});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
         type="text" 
         value={value}
         onChange={(e)=>setValue(e.target.value)}
         />
         {" "}
         <input 
         type="password" 
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         />
         {" "}
         <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login