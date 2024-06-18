import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import ButtonMenu from "./ButtonMenu";

const Header = () => {
  const { ativo, setAtivo } = React.useState(false);

  return (
    <header className="header">
      <ButtonMenu />
      <h1>Ecommerce</h1>
      <nav className="navBar">
        <Link to="/" style={{ display: "block" }}>
          Home
        </Link>
        <Link to="/login" style={{ display: "block" }}>
          Login
        </Link>
        <Link to="/produtos" style={{ display: "block" }}>
          Produtos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
