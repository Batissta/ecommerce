// rotas
import App from './App.jsx';
import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';
import Produto from './routes/Produto.jsx';
import EsqueciSenha from './routes/EsqueciSenha.jsx';
import CriarConta from './routes/CriarConta.jsx';
import ErrorPage from './routes/ErrorPage.jsx';

import ReactDOM from 'react-dom/client';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// css
import './css/style.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'produto/:id',
        element: <Produto />,
      },
      {
        path: 'forgetPass',
        element: <EsqueciSenha />,
      },
      {
        path: 'cadastro',
        element: <CriarConta />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />,
  // </React.StrictMode>
);
