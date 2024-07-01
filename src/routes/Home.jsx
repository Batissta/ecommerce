import React from 'react';
import { Link } from 'react-router-dom';
import ProdutoComponent from '../components/ProdutoComponent';
import logoLeV from '../assets/logos/logo_l&v.png';
import logoPrada from '../assets/logos/logo_prada.png';
import logoRolex from '../assets/logos/logo_rolex.png';
import logoVersace from '../assets/logos/logo_versace.png';
import logoBalenciaga from '../assets/logos/balenciaga_logo.png';
import logoBotega from '../assets/logos/botega_veneta_logo.png';
import logoCartier from '../assets/logos/cartier_logo.png';
import logoChanel from '../assets/logos/chanel_logo.png';
import logoHuboBoss from '../assets/logos/hugoboss_logo.png';
import { GlobalContext } from '../GlobalContext';

const collections = [
  {
    name: 'SUMMER COLLECTION',
    year: 2024,
    src: 'https://saint-laurent.dam.kering.com/m/85737dbadf46d36/original/freetemplate_hailey_bieber.jpg',
  },
  {
    name: 'FALL COLLECTION',
    year: 2024,
    src: 'https://saint-laurent.dam.kering.com/m/4316411df4b63805/original/freetemplate_hailey_bieber.jpg',
  },
  {
    name: 'SPRING COLLECTION',
    year: 2024,
    src: 'https://saint-laurent.dam.kering.com/m/4316411df4b63805/original/freetemplate_hailey_bieber.jpg',
  },
  {
    name: 'WINTER COLLECTION',
    year: 2024,
    src: 'https://saint-laurent.dam.kering.com/m/85737dbadf46d36/original/freetemplate_hailey_bieber.jpg',
  },
  // Adicione mais coleções conforme necessário
];
const Home = () => {
  const [produtos, setProdutos] = React.useState([]);
  const global = React.useContext(GlobalContext);

  React.useEffect(() => {
    fetch('https://batissta.github.io/ecommerce-backend/produtos.json')
      .then((res) => res.json())
      .then((json) => setProdutos(json));
  }, []);
  return (
    <>
      {global.usuario && (
        <div className="boas-vindas">
          <h2>Seja bem-vindo(a), {global.usuario.username}!</h2>
          <p>confira as novidades.</p>
        </div>
      )}
      <main className="homeMain-bg container">
        <div className="homeMain">
          {collections.map((c) => {
            return (
              <Link to={`/produto/1`} className="homeMain-img" key={c.name}>
                <h2 className="collection-title">{c.name}</h2>
                <span className="collection-year">{c.year}</span>
                <img src={c.src} alt={c.name} />
              </Link>
            );
          })}
        </div>
        <div className="homeMainTitle">
          <h1>
            <p>
              Venha entender o sentido da palavra{' '}
              <span className="dotGray">exclusividade</span>.<br />
            </p>
            <p>
              Mais que moda. Uma <span className="dotGray">experiência</span>.
              <br />
            </p>
            <p>
              This is <span className="dotGray">Heavy</span>.
              <br />
            </p>
          </h1>
        </div>
      </main>

      <section className="marcas container">
        <h1 className="title-1">
          Navegue por marcas<span className="dotGray">.</span>
        </h1>
        <div className="marcasArea">
          <div className="marcasLista">
            <Link to="/">
              <img src={logoLeV} alt="" />
            </Link>
            <Link to="/">
              <img src={logoPrada} alt="" />
            </Link>
            <Link to="/">
              <img src={logoRolex} alt="" />
            </Link>
            <Link to="/">
              <img src={logoVersace} alt="" />
            </Link>
            <Link to="/">
              <img src={logoBalenciaga} alt="" />
            </Link>
            <Link to="/">
              <img src={logoBotega} alt="" />
            </Link>
            <Link to="/">
              <img src={logoCartier} alt="" />
            </Link>
            <Link to="/">
              <img src={logoChanel} alt="" />
            </Link>
            <Link to="/">
              <img src={logoHuboBoss} alt="" />
            </Link>
            <Link to="/">
              <img src={logoPrada} alt="" />
            </Link>
          </div>
        </div>
      </section>

      <section className="produtosHome-bg" id="produtos">
        <h1 className="title-1 container">
          SPRING COLLECTION<span className="dotGray">.</span>
        </h1>
        <div className="carrosselProducts">
          <div className="produtosHome container">
            {produtos.map((p) => {
              return <ProdutoComponent key={p.nome} produto={p} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
