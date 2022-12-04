import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navigationbar.css";

export const Navigationbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)
  return (
    <div className="header">
      <nav className="navbar">
        <a className='logo' href="/">Carta</a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/inicio" onClick={closeMenu}>Inicio</a>
          </li>
          <li className="nav-item">
            <a href="/registro" onClick={closeMenu}>Registro</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigationbar;
