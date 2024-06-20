import React from 'react';
import { Link } from 'react-router-dom';
import logoGrande from '../assets/logo_grande.png';
import useMedia from '../hooks/useMedia';
import '../css/Header.css';

import Modal from './Modal';

const Header = () => {
  const [ativo, setAtivo] = React.useState(false);
  const mobile = useMedia('(max-width: 600px)');
  console.log(mobile);
  const handleClick = () => {
    setAtivo((ativo) => !ativo);
  };

  return (
    <header className="header">
      <nav className="headerNav">
        <Link to="/" style={{ color: '#121212' }}>
          <img src={logoGrande} alt="" />
        </Link>
        {/* colocar um botão para o login aqui */}
        <Modal handleClick={handleClick} mobile={mobile} />
      </nav>
    </header>
  );
};

export default Header;
