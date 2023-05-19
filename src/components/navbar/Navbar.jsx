import "./navbar.css"
import React from 'react'; 
import { Link } from 'react-router-dom';

 const Navbar = () => {
    return (
        <div className="navbar">
           <div className="navContainer">
            <span className="logo">CLEANING APP</span>
            <div className="navItems" >
             <Link to="/registration">
             <button className="navButton">Register</button></Link>
             <Link to="/login">
             <button className="navButton">Login</button></Link>
            </div>
           </div>
        </div>
    )
 }
 
 export default Navbar