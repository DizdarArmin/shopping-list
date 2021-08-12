import hero from "../assets/velvet-hero.jpg";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="images">
      <img className="img img-fluid" src={hero} alt="hero" />
      <img className="logo img img-fluid" src={logo} alt="logo" />
    </div>
  );
}
