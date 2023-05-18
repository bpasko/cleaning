import "./navbar.css"
import React from 'react'; 
import { Link } from 'react-router-dom';
import RegistrationForm from "../../pages/registration/registration";
import LoginForm from "../../pages/login/login";

 const Navbar = () => {
    return (
        <div className="navbar">
           <div className="navContainer">
            <span className="logo">CLEANING APP</span>
            <div className="navItems" >
             <Link to="src\pages\registration\registration.jsx">
             <button className="navButton">Register</button></Link>
             <Link to="src\pages\login\login.jsx">
             <button className="navButton">Login</button></Link>
            </div>
           </div>
        </div>
    )
 }
 
 export default Navbar