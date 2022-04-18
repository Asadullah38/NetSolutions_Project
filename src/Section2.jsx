import "./App.css";
import whiteboard from "./whiteboard.webp";
function Section2() {
  const me = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginRight: "4%",
    marginLeft: "4%",
    marginBottom: "20%",
  };

  return (<>
  
  
    <div id="sec2main">
      
      <div
        className="bg-image"
        style={{
          display: "flex",
          justifyContent: "center",

          alignItems: "center",
        }}
      >
        <img src={whiteboard} className="bg-image" alt="" style={me} />
        <div className="bg-image" id="picbox">
          <h1 id="ph1">A PEOPLE-FIRST APPROACH</h1>
          <hr id="pichr"></hr>
          <h6 id="ph2">
            Bespoke products & platforms engineered to elevate your customers’
            experience, earn their loyalty & grow your business.
          </h6>
        </div>

        <div id="paraboxS2">
          <h6 id="s2t2">
            And then there's Net Solutions. <br/><br/>As a software development company,
            we deliver the best of all worlds with our end-to-end agile
            development process. We get rid of your development headaches by
            maximizing efficiencies to deliver transformative solutions that
            delight users and drive revenue.
          </h6>
        <button id="s2b1" className="s1b">About Our Capabilities</button> 
        </div>
      </div>
    </div>
    
    
  </>
  );
}

export default Section2;
