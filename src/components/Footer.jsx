import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <>
        <div className="footer-nav">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="logo-footer">
          <Link to="/">Shringar</Link>
        </div>
        <div className="address">
          Pilani -333031
          <br />
          jhunjhunu, Rajasthan, India
          <p>Follow us on:</p>
        </div>
         
        <div className="Feedback">
         <p className="feed"> Feedback</p>
          <textarea
            cols="40"
            rows="5"
            placeholder="Your feedback..."
          ></textarea>
          <button id="sub">Submit</button>
        </div>

        <div className="copyright">
          <p>&copy; 2025 Shringar.com All rights reserved.</p>
        </div>
      </>
    </footer>
  );
}

export default Footer;
