import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import React from "react";

function App() {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <>
      <Header ativo={ativo} setAtivo={setAtivo} />
      <footer>
        <Outlet />
        <p>Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;
