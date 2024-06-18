import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import ButtonMenu from "./ButtonMenu";

const Header = ({ ativo, setAtivo }) => {
  const handleClick = () => {
    setAtivo((ativo) => !ativo);
  };

  return (
    <header className="header">
      <Link to="/" style={{ color: "#121212" }}>
        <h1>Ecommerce</h1>
      </Link>

      <div className="menu">
        <ButtonMenu handleClick={handleClick} />
        {ativo && (
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
        )}
      </div>
    </header>
  );
};

export default Header;
