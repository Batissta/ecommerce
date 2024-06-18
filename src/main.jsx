// rotas
import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import Login from "./routes/Login.jsx";
import Produtos from "./routes/Produtos.jsx";
import EsqueciSenha from "./routes/EsqueciSenha.jsx";
import CriarConta from "./routes/CriarConta.jsx";

import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// css
import "./css/style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "produtos",
        element: <Produtos />,
      },
      {
        path: "forgetPass",
        element: <EsqueciSenha />,
      },
      {
        path: "cadastro",
        element: <CriarConta />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
