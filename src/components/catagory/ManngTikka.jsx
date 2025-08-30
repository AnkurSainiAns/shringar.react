import { Link } from "react-router-dom";
import "./Bangles.css";
import {m1} from "../../assets/images/Imgs";
import {m2} from "../../assets/images/Imgs";
import {m3} from "../../assets/images/Imgs";
import {m4} from "../../assets/images/Imgs";
import {m5} from "../../assets/images/Imgs";
import {m6} from "../../assets/images/Imgs";
function ManngTikka() {
  return (
    <> 
    <div className="bmain">
        <div className="bshop">
          <img src={m1} alt="ManngTikka" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={m2} alt="ManngTikka" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={m3} alt="ManngTikka" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={m4} alt="ManngTikka" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={m5} alt="ManngTikka" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
     
        <div className="bshop">
          <img src={m6} alt="ManngTikka" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
       
        </div>
        <div className="space1"></div>
        </>
  );
}
export default ManngTikka;