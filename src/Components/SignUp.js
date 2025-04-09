import { NavLink } from "react-router-dom";
import "./signup.css";
import { useState } from "react";
import axios from "axios";
import { backend_URL } from "./server";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async(e) => {
    e.preventDefault(); // Prevent default form submission
    const userData = {
      name: name,
      email: email,
      password: password,
    };
      try{
        const res=await axios
        .post(`${backend_URL}/user/register`, userData)
        console.log(res.data);
        
      }catch(e){
        console.log(e);
      }
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={register}>Sign Up</button>
      </form>
      <span>
        Already have an account? <NavLink to="/login">Login</NavLink>
      </span>
    </div>
  );
};

export default SignUp;
