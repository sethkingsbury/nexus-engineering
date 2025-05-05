import { useState } from "react";
import { NavLink } from "react-router";
import "../styles/header.css";
import Logo from "../assets/logo_white.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={Logo} className='logo-image' alt="nexus engineering logo" />
        </NavLink>
      </div>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" reloadDocument>Home</NavLink>
        <NavLink to="/contact" reloadDocument>Contact</NavLink>
      </nav>
    </header>
  );
}
