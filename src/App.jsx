import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import Footer from "./components/Footer";

function App() {
  const [ativo, setAtivo] = React.useState(false);
  return (
    <>
      <Header ativo={ativo} setAtivo={setAtivo} />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
