import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Produto = () => {
  const { id } = useParams();
  return <h1>Produto {id}</h1>;
};

export default Produto;
