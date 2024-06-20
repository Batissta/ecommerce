import React from "react";
import logoLeV from "../assets/logos/logo_l&v.png";
import logoPrada from "../assets/logos/logo_prada.png";
import logoRolex from "../assets/logos/logo_rolex.png";
import logoVersace from "../assets/logos/logo_versace.png";
import "../css/routes/Home.css";

const Home = () => {
  return (
    <>
      <main className="homeMain container">
        <img
          src="https://saint-laurent.dam.kering.com/m/4316411df4b63805/original/freetemplate_hailey_bieber.jpg"
          alt=""
        />
        <img
          src="https://saint-laurent.dam.kering.com/m/4316411df4b63805/original/freetemplate_hailey_bieber.jpg"
          alt=""
        />
        <img
          src="https://saint-laurent.dam.kering.com/m/4316411df4b63805/original/freetemplate_hailey_bieber.jpg"
          alt=""
        />
      </main>

      <section className="marcas">
        <img src={logoLeV} alt="" />
        <img src={logoPrada} alt="" />
        <img src={logoRolex} alt="" />
        <img src={logoVersace} alt="" />
      </section>
    </>
  );
};

export default Home;
