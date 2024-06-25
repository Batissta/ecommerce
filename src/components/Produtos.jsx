import React from "react";

const Produtos = ({ data }) => {
  const dados = data;
  console.log(dados);
  // 2- fazer um map e para cada produto, criar um card, onde seus detalhes aparecem após passar o mouse em cima.

  // 3- criar um botão para adicionar o produto ao carrinho.
  return <div>{dados.nome}</div>;
};

export default Produtos;
