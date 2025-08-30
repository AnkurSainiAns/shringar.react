import { Link } from "react-router-dom";
import "./Body.css";
import { banner1, banner3, banner5 } from "../assets/images/images.jsx"; //slider 1 images
import { cat1, cat2, cat3 } from "../assets/images/images.jsx"; //catagory images
import { cat4, cat5, cat6 } from "../assets/images/images.jsx"; //catagory images
import { star } from "../assets/images/images.jsx"; //star image
import { review1, review2, review3, review4 } from "../assets/images/images.jsx"; //review
import { slider1, slider2, slider3 } from "../assets/images/images.jsx"; //slider 2 images
// import {main} from "../assets/images/images.jsx";


function Body() {
  return (
    <>
      <main>
        <div className="banner">
          <p className="h1">WOMEN ACCESSORIES</p>
          <p className="h2">Presented by </p>
          <p className="title">
          <Link to="/">Shringar</Link></p>
        
          <p className="h3">Latest Collection of Women Accessories</p>
         <span> <Link to="/Shop" className="shop-button">
            Shop Now
          </Link></span>
        </div>
        <div className="section">
          <div className="point1">
            <h1> Latest Collection</h1>
            <p>
              The latest collection of women’s accessories for 2025 showcases a
              blend of classic elegance and contemporary flair, offering a
              variety of options to enhance any ensemble
            </p>
          </div>
          <div className="point2">
            <h1> +250,000 satisfied customers</h1>
            <p>
              We believe in building trust with quality, affordability, and
              outstanding customer service. Because when our customers are
              happy, we shine even brighter!
            </p>
          </div>
          <div className="point3">
            <h1> Free delivery</h1>
            <p>
              We believe that shopping for your favorite jewelry should be as
              delightful as wearing it! That’s why we offer FREE DELIVERY across
              India on all orders
            </p>
          </div>
        </div>
        
        <div className="slider">
          <div className="slid">
            <img src={banner3} alt="slid4" />
            <Link to="/Shop" className="shop1">
              Shop Now
            </Link>
          </div>
          <div className="slid">
            <img src={banner1} alt="slid1" />
            <Link to="/shop" className="shop1">
              Shop Now
            </Link>
          </div>
          <div className="slid">
            <img src={banner5} alt="slid5" />
            <Link to="/shop" className="shop1">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="space1"></div>
        <div className="section2">
          <div className="mid-heading">
            <h1 className="gift-line">The perfect gift for Someone special</h1>
          </div>
          <div className="mid-subheading">
            <h6 className="happy-cus">100+ happy Customers</h6>
            <p className="happy-message">
              We believe in building trust with quality, affordability, and
              outstanding customer service. Because when our customers are
              happy, we shine even brighter!
            </p>
          </div>
        </div>

        <div className="cat-heading">
          <h1> Shop By Category</h1>
        </div>
        <div className="space"></div>
        <div className="cat-section">
          <div className="cat1">
            <img src={cat1} alt="cat1" />
            <Link to="/Shop" className="shop">
              Shop Now
            </Link>
          </div>
          <div className="cat2">
            <img src={cat2} alt="cat2" />
            <Link to="/Shop" className="shop">
              Shop Now
            </Link>
          </div>
          <div className="cat3">
            <img src={cat3} alt="cat3" />
            <Link to="/Shop" className="shop">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="space"></div>
        <div className="cat-section2">
          <div className="cat4">
            <img src={cat4} alt="cat4" />
            <Link to="/Shop" className="shop">
              Shop Now
            </Link>
          </div>
          <div className="cat5">
            <img src={cat5} alt="cat5" />
            <Link to="/Shop" className="shop">
              Shop Now
            </Link>
          </div>
          <div className="cat6">
            <img src={cat6} alt="cat6" />
            <Link to="/Shop" className="shop">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="space1"></div>

        <div className="story">
          <p className="story1"> Stories by our customers</p>
          <div className="cust-tag">
            <p> Customer Reviews</p>
          </div>
          <div className="space3"></div>
        </div>

        <div className="review">
          <div className="review1">
            <img src={star} alt="review1" className="star" />
            <p className="review-text">
              “I bought these earrings for my sister's wedding, and they were a
              hit! Everyone complimented her on them.”
            </p>
            <div className="both1">
              <img src={review1} alt="review1" className="box1" />

              <div className="reviewer-name">
                <p>
                  Sharmitha Das <br /> Kolkata
                </p>
              </div>
            </div>
          </div>
          <div className="review2">
            <img src={star} alt="review2" className="star" />
            <p className="review-text">
              “I bought these earrings for my sister's wedding, and they were a
              hit! Everyone complimented her on them.”
            </p>
            <div className="both2">
              <img src={review2} alt="review2" className="box2" />

              <div className="reviewer-name">
                <p>
                  Nisha <br /> Pilani
                </p>
              </div>
            </div>
          </div>
          <div className="review3">
            <img src={star} alt="review3" className="star" />
            <p className="review-text">
              “I love the variety of styles available. I can find something for
              every occasion!”
            </p>
            <div className="both3">
              <img src={review3} alt="review3" className="box3" />

              <div className="reviewer-name">
                <p>
                  Neha <br /> Mumbai
                </p>
              </div>
            </div>
          </div>
          <div className="review4">
            <img src={star} alt="review4" className="star" />
            <p className="review-text">
              “The customer service was excellent! They helped me choose the
              perfect gift for my friend.”
            </p>
            <div className="both4">
              <img src={review4} alt="review4" className="box4" />

              <div className="reviewer-name">
                <p>
                  Bhumika Koirala <br /> Siliguri
                </p>
              </div>
            </div>
          </div>
        </div>
         <div className="space1"></div>
        <div className="slider">
          <div className="slid">
            <img src={slider1} alt="slid1" />
            <Link to="/Shop" className="shop1">
              Shop Now
            </Link>
          </div>
          <div className="slid">
            <img src={slider2} alt="slid2" />
            <Link to="/Shop" className="shop1">
              Shop Now
            </Link>
          </div>
          <div className="slid">
            <img src={slider3} alt="slid3" />
            <Link to="/Shop" className="shop1">
              Shop Now
            </Link>
          </div>
        </div>
      
        <div className="space1"></div>
      
         
      </main>
    </>
  );
}

export default Body;
