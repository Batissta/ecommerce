import React from "react";
import "../css/routes/Login.css";

const Login = () => {
  return (
    <>
      <div className="container">
        <form id="login-form">
          <h2>LOGIN</h2>
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
          <div className="button">
            <button type="submit">Entrar</button>
          </div>
          <div className="links-cad">
            <a href="forget.html">Esqueceu sua senha?</a>
            <a href="cadastro.html">Criar conta</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
