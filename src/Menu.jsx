import "./App.css";
const Menu = (props) => {
  let load=0;
  return (

    <div
      id="menu"
      onMouseOver={()=>load+=1}
      style={
        !props.menu && load>=1
          ? {
              animationName: "wapis",
              animationDuration: "1s",
              animationIterationCount: "1",
            }
          : props.menu
          ? props.sty[3]
          : {}
      }
    >
      <div id="mdiv1">
        <ul id="ulm1">
          <li
            className="lim"
            style={props.menu ? { display: "block" } : {}}
            id="li1"
          >
            Services
          </li>
          <li
            className="lim"
            style={props.menu ? { display: "block" } : {}}
            id="li2"
          >
            Industries
          </li>
          <li
            className="lim"
            style={props.menu ? { display: "block" } : {}}
            id="li3"
          >
            Work
          </li>
          <li
            className="lim"
            style={props.menu ? { display: "block" } : {}}
            id="li4"
          >
            About
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
