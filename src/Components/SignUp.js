import { NavLink } from "react-router-dom";
import "./signup.css";
import { useState} from "react";
import axios from "axios";


const SignUp = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');   
const [password, setPassword] = useState('');

const signUp =  (e) => {
  e.preventDefault(); // Prevent default form submission
  const userData = {
    name: name,
    email: email,
    password: password
  };
          
  axios.post('http://localhost:8080/user/register',userData)
  .then((response)=>{
   console.log("user registered",response.data)
  }).catch((e)=>{console.log(e);})

  setName("")
  setEmail("")
  setPassword("")
}

  return <div className="signup">
    <h2>Sign Up</h2>
    <form>
      <div className="form-group">
        <label htmlFor="name">Username</label>
        <input type="text" id="name" placeholder="Enter your username" value={name} onChange={(e)=>setName(e.target.value)}/>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>

      <button onClick={signUp}>Sign Up</button>
    </form>
    <span>Already have an account? <NavLink to="/login">Login</NavLink></span>
  </div>;
};

export default SignUp;
