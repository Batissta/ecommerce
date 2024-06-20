import React from "react";

const Home = () => {
  return (
    <>
      <section
        className="homeImagens"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          maxWidth: "1000px",
          margin: "40px auto",
          gap: "2rem",
        }}
      >
        <img
          src="https://saint-laurent.dam.kering.com/m/4316411df4b63805/original/freetemplate_hailey_bieber.jpg"
          alt=""
          style={{ width: "340px", height: "600px", objectFit: "cover" }}
        />
        <img
          src="https://saint-laurent.dam.kering.com/m/4316411df4b63805/original/freetemplate_hailey_bieber.jpg"
          alt=""
          style={{ width: "340px", height: "600px", objectFit: "cover" }}
        />
        <img
          src="https://saint-laurent.dam.kering.com/m/4316411df4b63805/original/freetemplate_hailey_bieber.jpg"
          alt=""
          style={{ width: "340px", height: "600px", objectFit: "cover" }}
        />
      </section>

      <section
        className="homeImagem"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          maxWidth: "1000px",
          margin: "400px auto",
          gap: "2rem",
        }}
      >
        <img
          src="https://saint-laurent.dam.kering.com/m/1a58645a1d1615f7/original/freetemplate_hailey_bieber.jpg"
          alt=""
          style={{
            width: "calc(100% - 100px)",
            height: "100%",
            objectFit: "cover",
            margin: "0 auto",
          }}
        />
      </section>
      <h1>Home</h1>
    </>
  );
};

export default Home;
