import React from 'react';
import logoLeV from '../assets/logos/logo_l&v.png';
import logoPrada from '../assets/logos/logo_prada.png';
import logoRolex from '../assets/logos/logo_rolex.png';
import logoVersace from '../assets/logos/logo_versace.png';
import logoBalenciaga from '../assets/logos/balenciaga_logo.png';
import logoBotega from '../assets/logos/botega_veneta_logo.png';
import logoCartier from '../assets/logos/cartier_logo.png';
import logoChanel from '../assets/logos/chanel_logo.png';
import logoHuboBoss from '../assets/logos/hugoboss_logo.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <main className="homeMain-bg container">
        <div className="homeMain">
          <Link to={`/produto/1`} className="homeMain-img">
            <h2 className="collection-title">SUMMER COLLECTION</h2>
            <span className="collection-year">2024</span>
            <img
              src="https://saint-laurent.dam.kering.com/m/85737dbadf46d36/original/freetemplate_hailey_bieber.jpg"
              alt=""
            />
          </Link>
          <Link to={`/produto/1`} className="homeMain-img">
            <h2 className="collection-title">FALL COLLECTION</h2>
            <span className="collection-year">2024</span>
            <img
              src="https://saint-laurent.dam.kering.com/m/4316411df4b63805/original/freetemplate_hailey_bieber.jpg"
              alt=""
            />
          </Link>

          <Link to={`/produto/1`} className="homeMain-img">
            <h2 className="collection-title">SPRING COLLECTION</h2>
            <span className="collection-year">2024</span>
            <img
              src="https://saint-laurent.dam.kering.com/m/4316411df4b63805/original/freetemplate_hailey_bieber.jpg"
              alt=""
            />
          </Link>
          <Link to={`/produto/1`} className="homeMain-img">
            <h2 className="collection-title">WINTER COLLECTION</h2>
            <span className="collection-year">2024</span>
            <img
              src="https://saint-laurent.dam.kering.com/m/85737dbadf46d36/original/freetemplate_hailey_bieber.jpg"
              alt=""
            />
          </Link>
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
        <h2>Navegue por marcas.</h2>
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
    </>
  );
};

export default Home;
