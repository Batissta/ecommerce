import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import favIcon from '../assets/fav.png';
import favoritadoIcon from '../assets/favoritado.png';

const Produtos = () => {
  const { name } = useParams();
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
                }}
              >
                <img src={srcFav} alt="" />
              </button>
            </h1>
            <span className="preco">R$ 12,459</span>
          </div>
        </section>
      </main>
    </>
  );
};

export default Produtos;
