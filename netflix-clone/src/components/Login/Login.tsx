import { useState,useContext } from "react";
import './login.css';
import { useNavigate,Link } from "react-router-dom";
import {Firebasecontext} from '../../store/AuthContext';
import {signInWithEmailAndPassword} from 'firebase/auth'

const Login = ()=>{
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const firebaseContext = useContext(Firebasecontext);

  if (!firebaseContext) {
    return <div>Error: Firebase context is not available.</div>;
  }

  const { auth } = firebaseContext;
  const handlelogin = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); 
    }catch (error) {
      if (error instanceof Error) {
        console.error("Error logging in:", error.message);
        alert("Login failed. Please check your credentials.");
      } else {
        console.error("Unexpected error", error);
        alert("An unexpected error occurred.");
      }
    }
  }
  return(
    <div className="login-container">
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handlelogin}>
        <div className="input-group">
          <label htmlFor="username">Email</label>
          <input 
            type="email" 
          value={email}
            onChange={(e)=>setEmail(e.target.value)}
           
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            value={password} onChange={(e)=>setPassword(e.target.value)}
          
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
        </form>
      <div className="signup-link">
        <span>New to Netflix? </span>
        <Link to="/signup" className="register-btn">Register now</Link> 
      </div>
    </div>
  </div>
  )
}

export default Login;