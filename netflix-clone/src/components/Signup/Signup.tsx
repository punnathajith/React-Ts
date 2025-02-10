import { useState,useContext } from "react";
import { useNavigate,Link } from "react-router-dom";
import { Firebasecontext } from '../../store/AuthContext';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore";
import './signup.css';

const Signup = () =>{
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')
  const firebaseContext = useContext(Firebasecontext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!firebaseContext) {
      return <div>Error: Firebase context is not available.</div>;
    }
  
    if (!username || !email || !password) {
      alert("Validation failed. Please fill all the fields.");
      return; 
    }
    const usernamePattern = /^[A-Za-z]+$/;
    if (!usernamePattern.test(username)) {
      alert("Validation failed. Username must contain only letters.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Validation failed. Please enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      alert("Validation failed. Password must be at least 8 characters long.");
      return;
    }

    try {
      const { auth, db } = firebaseContext;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: username });

      await addDoc(collection(db, "Netflixusers"), {
        id: user.uid,
        username,
        email,
      });

      console.log("User created and data added to Firestore");
      navigate("/login"); 
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.error("Registration error:", error.message);
      } else {
        setError("An unexpected error occurred.");
        console.error("Unexpected error", error);
      }
    }
  };
  return(
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
             <span>Already account? </span>
                  <Link to="/login" className="register-btn">Login</Link> 
        </form>
      </div>
    </div>
  )
}

export default Signup;