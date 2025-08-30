import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Bangles from "./components/catagory/Bangles";
import Earrings from "./components/catagory/Earrings";
import Kaleera from "./components/catagory/Kaleera";
import ManngTikka from "./components/catagory/ManngTikka";
import Necklaces from "./components/catagory/Necklaces";
import Rings from "./components/catagory/Rings";
import CommingSoon from "./components/catagory/commingSoon";

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/bangles" element={<Bangles />} />
        <Route path="/Earrings" element={<Earrings />} />
        <Route path="/Kaleera" element={<Kaleera />} />
        <Route path="/ManngTikka" element={<ManngTikka />} />
        <Route path="/Necklaces" element={<Necklaces />} />
        <Route path="/Rings" element={<Rings />} />
        <Route path="/CommingSoon" element={<CommingSoon />}/>
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
