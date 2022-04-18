import S4Data from "./S4Data";
function Cities(props) {
  return (
    <div id="city">
      <img id="imgcity" style={{height:"50px",width:"50px"}}  src={props.img} alt="" />
      <h1 id="hcity">{props.h}</h1>
      <h3 id="pcity">{props.d}</h3>
    </div>
  );
}

export default Cities;
