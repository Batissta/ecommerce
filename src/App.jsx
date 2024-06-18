import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <footer>
        <Outlet />
        <p>Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;
