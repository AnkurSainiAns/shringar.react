import { Link } from "react-router-dom";
import "./Bangles.css";
import { k1 } from "../../assets/images/Imgs";
import { k2 } from "../../assets/images/Imgs";
import { k3 } from "../../assets/images/Imgs";
import { k4 } from "../../assets/images/Imgs";

function Kaleera() {
  return (
    <>
      <div className="bmain">
        <div className="bshop">
          <img src={k1} alt="kaleera" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={k2} alt="kaleera" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={k3} alt="kaleera" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={k4} alt="kaleera" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="space1"></div>
    </>
  );
}
export default Kaleera;
