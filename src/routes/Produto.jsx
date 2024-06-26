import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import favIcon from "../assets/fav.png";
import favoritadoIcon from "../assets/favoritado.png";
import frete from "../assets/delivery-truck.png";

const Produto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [favoritado, setFavoritado] = React.useState(false);
  const [noCarrinho, setNoCarrinho] = React.useState(false);
  const [srcFav, setSrcFav] = React.useState(favIcon);
  const [produtoById, setProdutoById] = React.useState({});

  const findProduto = async () => {
    const response = await fetch(
      "https://batissta.github.io/ecommerce-backend/produtos.json",
      {
        method: "GET",
      }
    );
    const json = await response.json();
    if (!json.some((p) => p.id == id)) {
      navigate("/404");
    }
    const produtoId = json.find((p) => +id === p.id);
    setProdutoById(produtoId);
  };

  React.useEffect(() => {
    findProduto();
  }, []);
  return (
    <>
      <main className="mainProduto-bg container">
        <section className="mainProduto">
          <div className="imagensArea">
            <img src={produtoById.img1} alt={produtoById.nome + " imagem 1"} />
            <img src={produtoById.img2} alt={produtoById.nome + " imagem 2"} />
            <img src={produtoById.img3} alt={produtoById.nome + " imagem 3"} />
          </div>
          <div className="produtoContent">
            <div className="titleArea">
              <h1 className="title">
                {produtoById.nome}
                <button
                  className="favBtn"
                  onClick={() => {
                    setSrcFav((src) => {
                      if (src === favIcon) {
                        return (src = favoritadoIcon);
                      } else {
                        return (src = favIcon);
                      }
                    });
                    setFavoritado((s) => !s);
                  }}
                >
                  <img src={srcFav} alt="" />
                </button>
              </h1>
              <span className="preco">$ {produtoById.preco}</span>
            </div>
            <div className="infosProduto">
              <p className="produtoDescricao">{produtoById.descricao}</p>
              <p>{produtoById.brand}</p>
            </div>

            <button
              className="produtoBotao"
              onClick={() => {
                setNoCarrinho((s) => !s);
              }}
            >
              {!noCarrinho && "Adicionar ao carrinho"}
              {noCarrinho && "Remover do carrinho"}
            </button>
            <div className="complementos">
              <p>
                Parcelamento em até 10x sem juros com o cartão Heavy black nas
                compras acima de R$8,000.00.
              </p>
              <p className="sobreFrete">
                <img src={frete} alt="" />
                Frete Grátis em todo o território nacional.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Produto;
