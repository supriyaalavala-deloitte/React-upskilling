import { Link } from "react-router-dom";
import navicon from "./assets/navicon.svg";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-img">
        <img className="nav-icon" src={navicon} alt="icon" />
      </div>
      <Link to={"/"} style={{ textDecoration: "none", color: "#000" }}>
        <div className="nav-title">Weather Forecaster</div>
      </Link>
    </div>
  );
}

export default Navbar;
