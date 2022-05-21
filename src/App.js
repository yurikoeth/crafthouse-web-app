import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Hero from "./components/Hero";
import Merch from "./components/Merch";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Bio from "./components/Bio";
import Cateringform from "./components/Cateringform"
import MenuSection from "./components/MenuSection"
import Order from "./components/Order"
import Faqs from "./components/Faqs";
import Catering from "./components/Catering";

function App() {
  const style = {
    App: "bg-black text-white"
  }

  return (
    <Router>
      <div className={style.App}>
        <Nav />
        <Hero />
        <Routes>
          <Route path="/" element={<><Bio/><Order/><MenuSection/><Merch/></>} />
          <Route path="/Catering" element={<><Catering/><Cateringform/></>} />
          <Route path="/FAQS" element={<Faqs/>} />
        </Routes>
        <Contact id="contact"/>
      </div>
    </Router>
  )
}

export default App;
