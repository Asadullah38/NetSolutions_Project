const About = () => {
  return (
    <div id="mainabout">
      <div id="about">
        <div id="about1">
          <h1 id="ab1h1">About Us</h1>
          <p>
            Net Solutions is a strategic design & build consultancy that unites
            creative design thinking with agile software development under one
            expert roof. Founded in 2000, we create award-winning transformative
            digital products & platforms for startups and enterprises worldwide.
          </p>
          <button id="abutt">Our Story</button>
        </div>
        <div id="about2">
          <h1 id="ab1h2">Industries</h1>
          <ul className="ulabout">
            <li className="sa" id="sa1">
              Retail and Ecommerce
            </li>
            <li className="sa" id="sa2">
              Sports and Fitness
            </li>
            <li className="sa" id="sa3">
              Media,Publishing and Entertainment
            </li>
            <li className="sa" id="sa4">
              Education and Training
            </li>
            <li className="sa" id="sa5">
              Food and Beverages
            </li>
            <li className="sa" id="sa6">
              Health Care
            </li>
            <li className="sa" id="sa7">
              Automotive
            </li>
          </ul>
        </div>

        <div id="about2">
          <h1 id="ab1h2">Services</h1>
          <ul className="ulabout">
            <li className="sa" id="sa1">
              Experience Design
            </li>
            <li className="sa" id="sa2">
              Digital Commerce
            </li>
            <li className="sa" id="sa3">
              Product Development
            </li>
            <li className="sa" id="sa4">
              Digital Experience Platform
            </li>
            <li className="sa" id="sa5">
              Data Analytics
            </li>
            <li className="sa" id="sa6">
              Digital Transformation
            </li>
          </ul>
        </div>

        <div id="about2">
          <h1 id="ab1h2">Knowledge Hub</h1>
          <ul className="ulabout">
            <li className="sa" id="sa1">
              Agile Software Development
            </li>
            <li className="sa" id="sa2">
              B2B Commerce
            </li>
            <li className="sa" id="sa3">
              Minimum Viable Product
            </li>
            <li className="sa" id="sa4">
              Mobile App Development
            </li>
            <li className="sa" id="sa5">
              Software as a Service
            </li>
            <li className="sa" id="sa6">
              Software Testing
            </li>
            <li className="sa" id="sa7">
              User Experience
            </li>
          </ul>
        </div>
      </div>
      <div id="about">
        <div id="about1">
          <h1
            id="ab1h2"
            style={{ marginLeft: "0px", fontSize: "22px", lineHeight: "30px",textAlign:"center",marginBottom:"50px" }}
          >
            Stay current with our latest insights
          </h1>
          <input type="email" id="abinput" placeholder="Enter your Email" />
         <center>
            <button id="abut" style={{ marginTop: "50px" }}>
            Submit
          </button>
           </center>
        </div>
      </div>
      <div id="about1">
        <h1  style={{ textAlign: "center" ,marginBottom:"50px"}}>
          Let's Connect
        </h1>
       <center>
          <div style={{ marginBottom:"50px"}}>

        <i className="fab fa-facebook-f" id="social"></i>
        <i className="fab fa-twitter" id="social"></i>
        <i className="fab fa-google" id="social"></i>
        <i className="fab fa-instagram" id="social"></i>
        <i className="fab fa-linkedin-in" id="social"></i>
        </div>
         </center>
      </div>
      <p style={{ textAlign: "center" ,paddingBottom:"50px"}}>
        <i className="fa-regular fa-circle-check"></i> We respect your privacy.
      </p>
    </div>
  );
};

export default About;
