import { IoHomeOutline } from "react-icons/io5";
import './Header.css';
import { useNavigate } from "react-router-dom";

const Header = ()=>{
const navigate = useNavigate();
function clickHandler(){
    navigate("/login");
    console.log("Login button clicked!");
}

    return(
        <header id="header">
            <IoHomeOutline size="30px"></IoHomeOutline>
            <button id="btn" onClick={clickHandler}>Login</button>
        </header>

    )
}

export default Header;