import hero from "../assets/velvet-hero.jpg";
import logo from "../assets/logo.png";
import Currency from "../components/Currency";
import "../App.css";

export default function Header() {
  return (
    <div className="images">
      <img className="img img-fluid" src={hero} alt="hero" />
      <img className="logo img img-fluid" src={logo} alt="logo" />
      <Currency />
    </div>
  );
}
