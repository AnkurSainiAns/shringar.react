import { Link } from "react-router-dom";
import "./Shop.css";
import {Size} from "../assets/images/Imgs";
import {RajwadiBangles} from "../assets/images/Imgs";
import {RajwadiBangles2} from "../assets/images/Imgs";
import {Photobanglesset} from "../assets/images/Imgs";
import {photobanglepair} from "../assets/images/Imgs";
import {namebanglesset} from "../assets/images/Imgs";
import {namebanglepair} from "../assets/images/Imgs";
import {nameandphotobanglessetinlakh} from "../assets/images/Imgs";
import {nameandphotobanglessetinlakh2} from "../assets/images/Imgs";
import {nameandphotosbanglessetinlakh} from "../assets/images/Imgs";
import {nameandphotobanglesset} from "../assets/images/Imgs";
import {nameandphotobanglesset2} from "../assets/images/Imgs";
import {lakhbanglesset} from "../assets/images/Imgs";
import {lacbangle} from "../assets/images/Imgs";
import {lacbangle2} from "../assets/images/Imgs";
import {lacbangle3} from "../assets/images/Imgs";
import {lacbangle4} from "../assets/images/Imgs";
import {lacbanglepair} from "../assets/images/Imgs";
import {lacbanglepair2} from "../assets/images/Imgs";
import {lacbanglepair3} from "../assets/images/Imgs";
// Earrings
import {e1} from "../assets/images/Imgs";
import {e2} from "../assets/images/Imgs";
import {e3} from "../assets/images/Imgs";
import {e4} from "../assets/images/Imgs";
import {e5} from "../assets/images/Imgs";
import {e6} from "../assets/images/Imgs";
import {e7} from "../assets/images/Imgs";
import {e8} from "../assets/images/Imgs";
import {e9} from "../assets/images/Imgs";

// Kaleera
import {k1} from "../assets/images/Imgs";
import {k2} from "../assets/images/Imgs";
import {k3} from "../assets/images/Imgs";
import {k4} from "../assets/images/Imgs";

// Necklace
import {n1} from "../assets/images/Imgs";
import {n2} from "../assets/images/Imgs";
import {n3} from "../assets/images/Imgs";
import {n4} from "../assets/images/Imgs";
import {n5} from "../assets/images/Imgs";
import {n6} from "../assets/images/Imgs";
//mangtika
import {m1} from "../assets/images/Imgs";
import {m2} from "../assets/images/Imgs";
import {m3} from "../assets/images/Imgs";
import {m4} from "../assets/images/Imgs";
import {m5} from "../assets/images/Imgs";
import {m6} from "../assets/images/Imgs";


//ring
import {r1} from "../assets/images/Imgs";
import {r2} from "../assets/images/Imgs";
import {r3} from "../assets/images/Imgs";
import {r4} from "../assets/images/Imgs";
import {r5} from "../assets/images/Imgs";
import {r6} from "../assets/images/Imgs";
import {r7} from "../assets/images/Imgs";





function Shop() {
    return (
      <>  <h1 className="sh">Bangles</h1>
      <div className="img">
        {/* <img src={lacbangle} alt="Bangles"/> */}
        {/* <img src={photobanglepair} alt="Bangles"/> */}
        {/* <img src={lacbanglepair3} alt="Bangles"/> */}
        <img src={lakhbanglesset} alt="Bangles"/>
        <img src={nameandphotobanglesset} alt="Bangles"/>
        <img src={RajwadiBangles} alt="Bangles"/>
       
       <button id="bshow"><Link to="/Bangles">Show More</Link></button>
       </div>

       {/* earings */}
       <h1 className="sh">Earings</h1>
      <div className="earring">
        {/* <img src={e6} alt="Earings" /> */}
        {/* <img src={e7} alt="Earings" /> */}
        {/* <img src={e3} alt="Earings" /> */}
        <img src={e2} alt="Earings" />
        <img src={e9} alt="Earings" />
        <img src={e5} alt="Earings" />
       <button id="bshow"><Link to="/Earrings">Show More</Link></button>

      </div>
      {/* Kaleera */}
       <h1 className="sh">Kaleera</h1>
      <div className="kaleera">
        <img src={k3} alt="kaleera" />
        <img src={k1} alt="kaleera" />
        <img src={k2} alt="kaleera" />
        <button id="bshow"><Link to="/Kaleera">Show More</Link></button>

      </div>
      
      {/* Necklace */}
       <h1 className="sh">Necklace</h1>
      <div className="necklace">
        <img src={n1} alt="necklace" />
        <img src={n5} alt="necklace" />
        <img src={n6} alt="necklace" />
       <button id="bshow"><Link to="/Necklaces">Show More</Link></button>

      </div>
      {/* maangtikka */}
       <h1 className="sh">Maang-Tikka</h1>
      <div className="mangtika">
        <img src={m1} alt="mangtika" />
        <img src={m3} alt="mangtika" />
        <img src={m6} alt="mangtika" />
       <button id="bshow"><Link to="/ManngTikka">Show More</Link></button>

      </div>

      {/* ring */}
      <h1 className="sh">Ring</h1>
      <div className="ring">
        <img src={r1} alt="ring" />
        <img src={r2} alt="ring" />
        <img src={r3} alt="ring" />
       <button id="bshow"><Link to="/Rings">Show More</Link></button>
        </div>
        <div className="space1"></div>

      </>
    );
}
export default Shop;