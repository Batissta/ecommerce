import "../css/Footer.css";
import logoGrande from "../assets/logo_grande.png";
import NavBar from "./NavBar";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footerLogo">
        <img src={logoGrande} alt="" />
      </div>
      <NavBar />
    </footer>
  );
};

export default Footer;
