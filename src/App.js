// import './App.css';
import Header from "./Components/Header";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPg from "./Components/UserPg";
import AdminPg from "./Components/AdminPg";

function App() {
  return (
    <Router>
      {/* <div> */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userRoute" element={<UserPg />}></Route>
        <Route path="/adminRoute" element={<AdminPg />}></Route>
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
