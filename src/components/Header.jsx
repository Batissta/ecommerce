import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

import Modal from "./Modal";

const Header = ({ ativo, setAtivo }) => {
  const handleClick = () => {
    setAtivo((ativo) => !ativo);
  };

  return (
    <header className="header-bg">
      <div className="header container">
        <Link to="/" style={{ color: "#121212" }}>
          <h1>Ecommerce</h1>
        </Link>

        <div className="menu">
          <Modal handleClick={handleClick} ativo={ativo} />
        </div>
      </div>
    </header>
  );
};

export default Header;
