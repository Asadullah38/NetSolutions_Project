import "./App.css";

const Section3 = (props) => {
  const me = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginRight: "4%",
    marginLeft: "4%",
    marginBottom: "13%",
  };

  return (
    <div>
      <h1 id="h1s3" className="bg-image">{props.head}</h1>
      <div
        className="bg-image"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={props.img} className="bg-image" alt="" style={me} />
        <div className="bg-image" id="picboxs3">
          <img id="img1s3" src={props.logo} />

          <h6 id="ph2s3">{props.para} </h6>
          <button id="b1s3">Read the Success Story</button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
