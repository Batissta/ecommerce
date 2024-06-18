import React from "react";
import "../css/routes/EsqueciSenha.css";
import { useParams, useNavigate } from "react-router-dom";

const EsqueciSenha = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    return navigate("/login");
  };
  return (
    <>
      <div id="esqueceu" className="container-box">
        <h1>RECUPERAR SENHA</h1>
        <p>
          Insira seu e-mail ou número de telefone associado à sua conta para
          receber instruções de como redefinir sua senha.
        </p>
        <form action="#">
          <div className="inputs-box">
            <label htmlFor="email">E-mail ou número de telefone:</label>
            <input type="text" id="email" name="email" />
          </div>
          <button className="button" type="submit" onClick={handleRedirect}>
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default EsqueciSenha;
