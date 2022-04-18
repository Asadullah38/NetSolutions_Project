import React from "react";
import "./App.css"; //Import here your file style
import Login from "./Login";
import Icon from "./icon";
function Section1() {
  return (
    <div id="sec1">
      <div className="s1p" id="s1p1">
        <h1 id="s1t1">
          <b>
          Software, Web & App Development Agency
          </b>
        </h1>
        <h4 id="s1t2">
        Build & Grow your Digital Business with a team of world-class Technologists; from UX to CloudOps – the whole nine yards.
        </h4>
        <div id="sec1b">
            
        <button id="s1b1" className="s1b">Explore Services</button>
        
        <button id="s1b2" className="s1b">View Client Success Stories</button>
        </div>
      </div>
      <div className="s1p" id="s1p2">
        <Login/>
        <Icon/>
      </div>
    </div>
  );
}

export default Section1;
