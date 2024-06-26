import { Link } from "react-router-dom";
import logoGrande from "../assets/logo_grande.png";
import NavBar from "./NavBar";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerLogo">
        <img src={logoGrande} alt="" />
      </div>
      <div className="navegacaoFooter">
        <Link to="/">Página inicial</Link>
        <Link to="/desenvolvimento">
          Quem somos?
        </Link>
        <Link to="/desenvolvimento">Carrinho</Link>
      </div>
    </footer>
  );
};

export default Footer;
