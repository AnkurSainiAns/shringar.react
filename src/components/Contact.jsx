import { Link } from "react-router-dom";
import "./Shop.css";
import "./Body.css";
function Contact() {
  return (
    <>
    <div className="con">
      <h1>Contact us  </h1>
      <p> Gmail - an2811saini@gmail.com</p>
      <p>Mobile No - 8824191058 </p>
       <p>
        Visit our {" "}
        <a
          href="https://ankursainians.github.io/portfolio/"
          target="_blank"
        >
          Website {" "}
        </a>
        for more details.
      </p>

      <br />
      <br />
      <h4>Enter Your Massage</h4>
      <textarea cols="40" rows="5"></textarea>
    </div>
    
    <div className="space1"></div>
    
    </>
  );
}
export default Contact;
