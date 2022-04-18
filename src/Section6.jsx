import S4Data from "./S4Data";
import Section4 from "./Section4";
function Section6() {
  return (
    <>
      <center>
        <h1 style={{marginTop:"100px",marginBottom:"0px"}}>Awards & Recognitions</h1>
      </center>
      <div id="back">
        {S4Data[1].map((item, key) => {
          return <Section6_1 img={item.img} />;
        })}
      </div>
    
        <h1 style={{textAlign:"center"}}>Partnerships & Alliances</h1>


      <div id="back">
        {S4Data[2].map((item, key) => {
          return <Section6_1 img={item.img} />;
        })}
      </div>
    </>
  );
}

function Section6_1(props) {
  return (
    <img
      src={props.img}
      alt="Avatar"
      style={{
        width: "20%",
        height:"15%",
        padding:"5%"
      }}
    />
  );
}

export default Section6;
