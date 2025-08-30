import { Link } from "react-router-dom";
import "./Bangles.css";
import {n1} from "../../assets/images/Imgs";
import {n2} from "../../assets/images/Imgs";
import {n3} from "../../assets/images/Imgs";
import {n4} from "../../assets/images/Imgs";
import {n5} from "../../assets/images/Imgs";
import {n6} from "../../assets/images/Imgs";
function Necklaces() {
  return (
    <>
     <div className="bmain">
        <div className="bshop">
          <img src={n1} alt="Necklace" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={n2} alt="Necklace" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={n3} alt="Necklace" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={n4} alt="Necklace" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={n5} alt="Necklace" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={n6} alt="Necklace" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        </div>
        <div className="space1"></div>
        </>
  );
}
export default Necklaces;