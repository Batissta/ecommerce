import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const hrefSplited = window.location.href.split('/');
  const href = hrefSplited[hrefSplited.length - 1];

  return (
    <>
      <h1>Ops...</h1>
      <p>Perdão, um erro inesperado aconteceu</p>
      {href === 'desenvolvimento' ? (
        <p>Seção em desenvolvimento...</p>
      ) : (
        <p>{error.message || error.status}</p>
      )}
    </>
  );
};

export default ErrorPage;
