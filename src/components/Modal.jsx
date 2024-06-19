import React from "react";
import "../css/Modal.css";
import ButtonMenu from "./ButtonMenu";
import { Link } from "react-router-dom";

const Modal = ({ handleClick, ativo }) => {
  return (
    <>
      <nav className="modal">
        <ButtonMenu handleClick={handleClick} />
        {ativo && (
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
              <Link
                className="link"
                to="/produtos"
                style={{ display: "block" }}
              >
                Produtos
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Modal;
