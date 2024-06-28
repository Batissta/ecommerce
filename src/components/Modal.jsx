import React from 'react';
import menuHamburguer from '../assets/cardapio.png';
import '../css/Modal.css';
import { Link } from 'react-router-dom';

const Modal = ({ mobile }) => {
  const [ativo, setAtivo] = React.useState(false);
  const handleClick = (e) => {
    setAtivo((ativo) => !ativo);
  };
  return (
    <>
      {mobile && (
        <button
          className={`buttonMenu ${ativo && 'ativo'}`}
          onClick={handleClick}
        >
          <img src={menuHamburguer} alt="" />
        </button>
      )}
      {(!mobile || ativo) && (
        <nav className="modal">
          <ul className="menu">
            <li>
              <Link className="link" to="/" style={{ display: 'block' }}>
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/login" style={{ display: 'block' }}>
                Login
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="/desenvolvimento"
                style={{ display: 'block' }}
              >
                Carrinho
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Modal;
