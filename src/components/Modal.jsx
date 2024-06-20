import React from "react";
import "../css/Modal.css";
import { Link } from "react-router-dom";

const Modal = ({ mobile }) => {
  const [ativo, setAtivo] = React.useState(false);
  const handleClick = () => {
    setAtivo((ativo) => !ativo);
  };

  return (
    <>
      {mobile && (
        <button className="buttonMenu" onClick={handleClick}>
          <img src="src\assets\cardapio.png" alt="" />
        </button>
      )}
      {(!mobile || ativo) &&  <nav className="modal">
        <ul className="menu">
          <li>
            <Link className="link" to="/" style={{ display: "block" }}>
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/login" style={{ display: "block" }}>
              Login
            </Link>
          </li>
          <li>
            <Link className="link" to="/produtos" style={{ display: "block" }}>
              Produtos
            </Link>
          </li>
        </ul>
      </nav>}
      
    </>
  );
};

export default Modal;
