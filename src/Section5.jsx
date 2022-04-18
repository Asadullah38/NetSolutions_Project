import logo from "./img/s1f.webp";
import Section4 from "./Section4";
import { useState } from "react";
import S4Data from "./S4Data";
import comma from "./img/index.svg";

import d1 from "./images/Daniel.jpg";
import d2 from "./images/Will.jpg";
import d3 from "./images/Jaspinder.jpg";
import d4 from "./images/sean.jpg";
import d5 from "./images/steve.jpg";

const Section5 = () => {
  /* States Used */
  const [data, setdata] = useState([
    {
      img: d1,
      key: 0,
      name: "Daniel Wolfe",
      occ: "CEO OF SOAQ",
      desc: "Working with Net Solutions for the past 8 years has re-enforced our decision to not only outsource some of our software development but also to continue working with them as our partner.",
    },
    {
      img: d2,
      key: 1,
      name: "Will Paterson",
      occ: "CO-FOUNDER, ED PLACE",
      desc: "I just loved three things about Net Solutions – culture, quality, and desire. Their confidence in quality and their understanding for the client's passion are great.",
    },
    {
      img: d3,
      key: 2,
      name: "Jaspinder Singh",
      occ: "SOFTWARE DOVELOPMENT MANAGER, IMG UK LTD.",
      desc: "Net Solutions provided excellent support in the areas of website engineering and site optimization. I can confidently recommend Net Solutions as a dedicated and reliable supplier, and experts in their field.",
    },
    {
      img: d4,
      key: 3,
      name: "Sean Devlin",
      occ: "CO-FOUNDER & PRODUCT MANAGER, FRONT RUSH",
      desc: "Net Solutions is our Outsourcing partner. They really focus on customers and understand their business objectives. We worked with them for over 10 years and they have really done an outstanding job for us.",
    },
    {
      img: d5,
      key: 4,
      name: "Steve Brandish",
      occ: "DIRECTOR OF AN AUSTRALIAN STEALTH STARTUP",
      desc: "They've been extremely flexible in their process for delivering our project, just what our startup needed. It has been an extremely positive experience.",
    },
  ]);

  const [img, setimg] = useState(data[0].img);
  const [clicked, setclicked] = useState(0);
  const [name, setname] = useState(data[0].name);
  const [occ, setocc] = useState(data[0].occ);
  const [desc, setdesc] = useState(data[0].desc);
  {
    /* Onclick Function*/
  }

  let list = (e) => {
    setimg(e.target.src);
    let a = e.target.getAttribute("value");
    setname(data[a].name);
    setocc(data[a].occ);
    setclicked(e.target.getAttribute("value"));
    setdesc(data[a].desc);
    if (e.target.getAttribute("value") == clicked) {
      e.target.style.opacity = 1;
    }
  };

  return (
    <>
      <h1 id="h1s3" style={{ textAlign: "center", fontSize: "60px" }}>
        Clients
      </h1>
      <div id="back">
        {S4Data[0].map((item, key) => {
          return <Section4 bimg={item.bimg} d={item.d} img={item.img} />;
        })}
      </div>

      {/* Participants Section */}

      <h1 id="h1s3">
        Trusted by the World’s Leading <i>Startups</i> and <i>Enterprises</i> Since 2000.
      </h1>
      <div className="d-flex justify-content-center" id="dev">
        {/* Participant/Image Section */}
        <div id="devimgs">
          <img src={img} id="divimg" alt="" />
        </div>

        {/* Participant/Description Section */}
        <div id="ddesc">
          <h3 id="dname">{name}</h3>
          <h5 id="docc">{occ}</h5>
          <img id="comma" src={comma} alt="" />
          <h6 id="devdesc">{desc}</h6>
          <button id="devbut" ><a target="blank" href="https://www.youtube.com/watch?v=i2rCmVhWbgE&feature=emb_logo">Watch the Review <img src="https://www.netsolutions.com/assets/images/play-icon-index.svg" /></a></button>
        </div>

        {/* Participant/Strip Section */}
        <div id="strip">
          {data.map((item, key) => {
            return (
              <img
                value={key}
                src={item.img}
                onClick={list}
                style={clicked == key ? { opacity: 1 } : { opacity: 0.3 }}
                className="stripimg"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Section5;
