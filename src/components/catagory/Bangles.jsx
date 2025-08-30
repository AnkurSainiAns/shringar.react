import { Link } from "react-router-dom";
import "./Bangles.css";
import "../Body.css";
import { RajwadiBangles } from "../../assets/images/Imgs";
import { RajwadiBangles2 } from "../../assets/images/Imgs";
import { Photobanglesset } from "../../assets/images/Imgs";
import { photobanglepair } from "../../assets/images/Imgs";
import { namebanglesset } from "../../assets/images/Imgs";
import { namebanglepair } from "../../assets/images/Imgs";
import { nameandphotobanglessetinlakh } from "../../assets/images/Imgs";
import { nameandphotobanglessetinlakh2 } from "../../assets/images/Imgs";
import { nameandphotosbanglessetinlakh } from "../../assets/images/Imgs";
import { nameandphotobanglesset } from "../../assets/images/Imgs";
import { nameandphotobanglesset2 } from "../../assets/images/Imgs";
import { lakhbanglesset } from "../../assets/images/Imgs";
import { lacbangle } from "../../assets/images/Imgs";
import { lacbangle2 } from "../../assets/images/Imgs";
import { lacbangle3 } from "../../assets/images/Imgs";
import { lacbangle4 } from "../../assets/images/Imgs";
import { lacbanglepair } from "../../assets/images/Imgs";
import { lacbanglepair2 } from "../../assets/images/Imgs";
import { lacbanglepair3 } from "../../assets/images/Imgs";

function Bangles() {
  return (
    <>
      <div className="bmain">
        <div className="bshop">
          <img src={lacbangle} alt="Bangles" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={nameandphotobanglessetinlakh} alt="Bangles" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={lacbanglepair3} alt="Bangles" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={photobanglepair} alt="Bangles" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={lacbangle} alt="Bangles" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={namebanglepair} alt="Bangles" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={namebanglesset} alt="Bangles" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={Photobanglesset} alt="Bangles" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={RajwadiBangles} alt="Bangles" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={nameandphotobanglesset} alt="Bangles" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
        <div className="bshop">
          <img src={lakhbanglesset} alt="Bangles" />
          <Link to="/CommingSoon" className="shop1">
            Shop Now
          </Link>
        </div>
      </div>
      
      <div className="space1"></div>
    </>
  );
}

export default Bangles;
