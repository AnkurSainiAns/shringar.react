import { Link } from "react-router-dom";
import "./Bangles.css";
import { e1 } from "../../assets/images/Imgs";
import { e2 } from "../../assets/images/Imgs";
import { e3 } from "../../assets/images/Imgs";
import { e4 } from "../../assets/images/Imgs";
import { e5 } from "../../assets/images/Imgs";
import { e6 } from "../../assets/images/Imgs";
import { e7 } from "../../assets/images/Imgs";
import { e8 } from "../../assets/images/Imgs";
import { e9 } from "../../assets/images/Imgs";

function Earrings() {
  return (
    <>
      <div className="bmain">
        <div className="bshop">
          <img src={e1} alt="Earrings" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={e2} alt="Earrings" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={e3} alt="Earrings" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={e4} alt="Earrings" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={e5} alt="Earrings" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={e6} alt="Earrings" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={e7} alt="Earrings" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={e8} alt="Earrings" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={e9} alt="Earrings" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="space1"></div>
    </>
  );
}
export default Earrings;
