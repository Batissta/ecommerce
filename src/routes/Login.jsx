import React from "react";
import { Link } from "react-router-dom";
import "../css/routes/Login.css";

const Login = () => {
  return (
    <>
      <div id="login" className="container-box">
        <form id="login-form">
          <h1>LOGIN</h1>
          <div className="inputs-box">
            <label htmlFor="username">Usuário:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Digite seu nome de usuário"
            />
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
            />
          </div>
          <button className="button" type="submit">
            Entrar
          </button>
          <div className="links-cad">
            <Link className="link" to="/forgetPass">
              Esqueceu sua senha?
            </Link>
            <Link className="link" to="/">
              Criar conta
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
