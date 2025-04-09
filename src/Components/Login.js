import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { backend_URL } from "./server";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
// axios.defaults.withCredentials=true;
    if (email === "" || password === "") {
      setError("Both fields are required");
      return;
    }

    axios
      .post(`${backend_URL}/user/login`, { email, password })
      .then((res) => {
        console.log(res.data);
        // localStorage.setItem("token",res.data.token)
        const token = res.data.token;
        if (token) {
          try {
            const decoded = jwtDecode(token);
            const role = decoded.role;

            console.log(role);
            if (role === "admin") {
              navigate("/adminRoute");
            } else if (role === "user") {
              navigate("/userRoute");
            } else {
              navigate("/");
            }
            
          } catch (e) {
            console.log("failed to decode token");
          }
        }
      })
      .catch((e) => {
        console.log(e);
        setError("Invalid Credentials");
      });
    setError("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            placeholder="Enter your email"
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" style={styles.button}>
          Login
        </button>
        <span>
          Don't Have an Account ? <NavLink to="/signup">Sign Up</NavLink>
        </span>
      </form>
    </div>
  );
};

// Simple styles to make the form look nicer
const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
};

export default LoginPage;
