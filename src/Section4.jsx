import "./App.css";
const Section4 = (props) => {
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={props.bimg}
              alt="Avatar"
              style={{ width: "93px", height: "34px" }}
            />
          </div>
          <div className="flip-card-back">
            <img src={props.img} />

            <hr id="hrc" />
            <p id="p">{props.d}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
