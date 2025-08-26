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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />}>
          <Route path="bangles" element={<Bangles />} />
          <Route path="earrings" element={<Earrings />} />
          <Route path="kaleera" element={<Kaleera />} />
          <Route path="manngtikka" element={<ManngTikka />} />
          <Route path="necklaces" element={<Necklaces />} />
          <Route path="rings" element={<Rings />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
