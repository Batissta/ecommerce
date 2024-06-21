import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <span style={{ display: 'block' }}>Essa rota não existe neste site.</span>
      <Link to="/">Página Inicial</Link>
    </>
  );
};

export default ErrorPage;
