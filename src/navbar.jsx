import "./App.css";
import { useState } from "react";

function Navbar(props) {
  const menu=props.menu;
  const scr=props.scr;
  const hover=props.hover;
  const [sty1, sty2, sty3, s, sty4, sty5, sty6] = props.sty;
  return (
    <nav
      id="navtop"
      style={
        props.menu && props.scr
          ? { background: "black", opacity: "0.9", paddingBottom: "1.5%" }
          : props.menu
          ? { background: "black", opacity: "0.9" }
          : props.scr
          ? { boxShadow: "rgba(0, 0, 0, 0.24) 0px 8px 13px", padding: "13px" }
          : { boxShadow: "none" }
      }
    >
      <img
        src={props.logo}
        style={
          props.menu
            ? { visibility: "hidden" }
            : props.scr
            ? { height: "35px", width: "150px" }
            : { boxShadow: "none" }
        }
        id="img"
        alt=""
      ></img>
      <button
        onMouseEnter={props.hov}
        onMouseLeave={props.unhov}
        id="consult"
        style={window.visualViewport.width>1000?(
          props.menu && props.hover
            ? sty6
            : props.menu
            ? sty4
            : props.menu
            ? {
                zIndex: "130",
                background: "black",
                color: "white",
                border: "2px solid white",
              }
            : props.scr
            ? sty5
            : {}):{}
        }
      >
        Get a Free Consultation
      </button>
      <div
        id="popup"
        style={props.menu ? { background: "black" } : {}}
        onClick={props.fmen}
      >
        <span id="l1" className="l" style={props.menu ? sty1 : {}}></span>
        <span id="l2" className="l" style={props.menu ? sty2 : {}}></span>
        <span id="l3" className="l" style={props.menu ? sty3 : {}}></span>
      </div>
    </nav>
  );
}
export default Navbar;
