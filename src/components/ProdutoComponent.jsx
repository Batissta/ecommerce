import React from "react";
import { Link } from "react-router-dom";

const ProdutoComponent = ({ produto }) => {
  return (
    <Link to={`/produto/${produto.id}`} className="produtoComponent">
      <div className="produtoComponentImg">
        <img src={produto.img1} alt={produto.nome} />
      </div>
      <div className="produtoComponentInfo">
        <h2>{produto.nome}</h2>
        <span>$ {produto.preco}</span>
        <p>{produto.descricao}</p>
      </div>
    </Link>
  );
};

export default ProdutoComponent;
