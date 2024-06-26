import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1>Ops...</h1>
      <p>Perdão, um erro inesperado aconteceu</p>
      <p>{error.statusText || error.message}</p>
    </>
  );
};

export default ErrorPage;
