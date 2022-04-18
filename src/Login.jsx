import React from "react";
import Countries from "./Countries";
function FormPage() {
  return (
    <div id="logcard">
      <h1 id="lt1">Need Help with Software Development?</h1>
      <form>
        <input type="name" placeholder="NAME *" className="inp" id="inp1" />
        <input type="email" placeholder="EMAIL *" className="inp" id="inp2" />
        <div id="twoi">
          <Countries />
          <input type="tel" placeholder="TELEPHONE" className="inp" id="inp3" />
        </div>
        <textarea
          type="text"
          placeholder="LEAVE A MESSAGE"
          className="inp"
          id="inp4"
        />

        <button variant="primary" type="submit" id="logbutton">
          GET in Touch
        </button>
      </form>
    </div>
  );
}

export default FormPage;
