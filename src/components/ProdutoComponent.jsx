import React from "react";

const ProdutoComponent = ({ produto }) => {
  // done - fazer um map e para cada produto, criar um card, onde seus detalhes aparecem após passar o mouse em cima.

  // 3- criar um botão para adicionar o produto ao carrinho.
  return (
    <div>
      <h1>{produto.nome}</h1>
      <img src={produto.imagemSrc} alt="" />
    </div>
  );
};

export default ProdutoComponent;
