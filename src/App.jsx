import { useState } from "react";
import "./App.css";
import logo from "./logo2.svg";
import Menu from "./Menu";
import logo1 from "./MLOGO1.webp";
import Navbar from "./navbar";
import Section1 from "./Section1";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3";
import StyleData from "./StyleData";
import Sec3Data from "./Sec3Data";
import Section4 from "./Section4";
import Section6 from "./Section6";

import d1 from "./images/Daniel.jpg";
import d2 from "./images/Will.jpg";
import d3 from "./images/Jaspinder.jpg";
import d4 from "./images/sean.jpg";
import d5 from "./images/steve.jpg";

import logo2 from "./img/s4f.svg";
import Section5 from "./Section5";
import S4Data from "./S4Data";
import About from "./About";
import Cities from "./Cities";
import Footer from "./Footer";
function App() {
  const [hover, sethover] = useState(false);
  const hov = () => {
    sethover(true);
   
  };

  
  

  const unhov = () => {
    sethover(false);
  };
  const [sc, setsc] = useState(false);
  const [menu, setmenu] = useState(false);
  let men = () => {
    setmenu(!menu);
  };

  let scrolled = () => {
    if (window.scrollY > 0) {
      setsc(true);
    } else {
      setsc(false);
    }
  };

  window.addEventListener("scroll", scrolled);
 

  return (
    <div id="main">
      <Navbar
        scr={sc}
        sty={StyleData}
        menu={menu}
        fmen={men}
        hover={hover}
        hov={hov}
        unhov={unhov}
        logo={logo}
      />
      <br></br>
      <Menu sty={StyleData} scr={sc} menu={menu} />
      <Section1 />

      <Section2 />
      {Sec3Data.map((item, key) => {
        return (
          <Section3
            key={item.id}
            head={item.head}
            img={item.img}
            logo={item.logo}
            para={item.para}
          />
        );
      })}

      <Section5  />
      <Section6 />

      <About />
     <Footer/>
    </div>
  );
}

export default App;
