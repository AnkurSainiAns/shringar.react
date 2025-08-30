import {r1} from "../../assets/images/Imgs";
import {r2} from "../../assets/images/Imgs";
import {r3} from "../../assets/images/Imgs";
import {r4} from "../../assets/images/Imgs";
import {r5} from "../../assets/images/Imgs";
import {r6} from "../../assets/images/Imgs";
import {r7} from "../../assets/images/Imgs";
import { Link } from "react-router-dom";
import "./Bangles.css";
function Rings() {
  return (
    <>
     <div className="bmain">
        <div className="bshop">
          <img src={r1} alt="Ring" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={r2} alt="Ring" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={r3} alt="Ring" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={r4} alt="Ring" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={r5} alt="Ring" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={r6} alt="Ring" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={r7} alt="Ring" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        </div>
        <div className="space1"></div>
        </>
  );
}
export default Rings;