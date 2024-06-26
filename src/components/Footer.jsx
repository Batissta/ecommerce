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
        <Link onClick={() => alert("Seção em desenvolvimento!")}>
          Quem somos?
        </Link>
        <Link onClick={() => alert("Seção em desenvolvimento!")}>Carrinho</Link>
      </div>
    </footer>
  );
};

export default Footer;
