import { useContext } from "react";
import { UserContext } from "./context/UserContext";


const Details = ()=>{
  const {user} = useContext(UserContext);
  const {value,password} = user;
  return(
    <>
      <p>UserName:{value}</p>
      <p>passWord:{password}</p>
    </>
  )
}

export default Details;