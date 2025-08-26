import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <>
        <div className="logo">
          <Link to="/">Shringar</Link>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </>
    </header>
  );
}

export default Header;
