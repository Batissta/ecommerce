import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import favIcon from '../assets/fav.png';
import favoritadoIcon from '../assets/favoritado.png';
import frete from '../assets/delivery-truck.png';

const Produto = () => {
  const { name } = useParams();
  const [favoritado, setFavoritado] = React.useState(false);
  const [noCarrinho, setNoCarrinho] = React.useState(false);
  const [srcFav, setSrcFav] = React.useState(favIcon);
  const navigate = useNavigate();

  return (
    <>
      <main className="mainProduto-bg container">
        <section className="mainProduto">
          <div className="imagensArea">
            <img
              src="https://saint-laurent.dam.kering.com/m/85737dbadf46d36/original/freetemplate_hailey_bieber.jpg"
              alt=""
            />
            <img
              src="https://saint-laurent.dam.kering.com/m/4316411df4b63805/original/freetemplate_hailey_bieber.jpg"
              alt=""
            />
            <img
              src="https://saint-laurent.dam.kering.com/m/85737dbadf46d36/original/freetemplate_hailey_bieber.jpg"
              alt=""
            />
            <img
              src="https://saint-laurent.dam.kering.com/m/4316411df4b63805/original/freetemplate_hailey_bieber.jpg"
              alt=""
            />
          </div>
          <div className="produtoContent">
            <div className="titleArea">
              <h1 className="title">
                {name}
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
              <span className="preco">R$ 10,500.00</span>
            </div>
            <p>
              <span>Brand:</span> Marca do produto
            </p>
            <button
              className="produtoBotao"
              onClick={() => {
                setNoCarrinho((s) => !s);
              }}
            >
              {!noCarrinho && 'ADICIONAR AO CARRINHO'}
              {noCarrinho && 'REMOVER DO CARRINHO'}
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
