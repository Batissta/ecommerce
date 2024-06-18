import React from "react";
import "../css/routes/CriarConta.css";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

const CriarConta = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    return navigate("/login");
  };
  return (
    <>
       <div id="criarConta" class="container-box">
        <form action="#">
            <h2>CADASTRO</h2>
        <div class="inputs-box">
            <label for="username">Nome:</label>
            <input type="text" id="username" name="username" placeholder="Digite seu nome completo"/>
            <label for="username">Email:</label>
            <input type="text" id="username" name="username" placeholder="Digite seu email"/>
            <label for="password">Senha:</label>
            <input type="password" id="password" name="password" placeholder="Crie uma senha"/>
        </div>
        <button className="button" type="submit" onClick={handleRedirect}>
            Enviar
          </button>
        <div class="links-cad">
          <Link className="link" to="/login">
              Já possui uma conta?
            </Link>
            </div>
        </form>
      </div>
      
    </>
  );
};

export default CriarConta;
