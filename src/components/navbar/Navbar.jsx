import "./navbar.css"
import React from 'react'; 
import { Link } from 'react-router-dom';

 const Navbar = () => {
    return (
        <div className="navbar">
           <div className="navContainer">
            <span className="logo">THE CLEANING PROS</span>
            <div><p className="paragraph">let us handle this stuff for you...</p></div>
            <div className="navItems" >
             <Link to="/registration">
             <button className="navButton">Rejestracja</button></Link>
             <Link to="/login">
             <button className="navButton">Login</button></Link>
            </div>
           </div>
        </div>
    )
 }
 
 export default Navbar