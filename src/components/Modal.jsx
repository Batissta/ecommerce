import React from "react";
import "../css/Modal.css";
import ButtonMenu from "./ButtonMenu";
import { Link } from "react-router-dom";

const Modal = ({ handleClick, ativo }) => {
  return (
    <>
      <section className="modalSection">
        <ButtonMenu handleClick={handleClick} />
        {ativo && (
          <nav className="modal">
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
        )}
      </section>
    </>
  );
};

export default Modal;
