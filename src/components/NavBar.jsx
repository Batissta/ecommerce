import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navBar">
        <Link className="link" to="/" style={{ display: "block" }}>
          Home
        </Link>
        <Link className="link" to="/login" style={{ display: "block" }}>
          Login
        </Link>
        <Link className="link" to="/produtos" style={{ display: "block" }}>
          Produtos
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
