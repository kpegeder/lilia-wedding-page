import React from "react";
import "./style.css";
import Cabin from "../../assets/images/Cabin.png";

// ToDo
// Figure out how to display mountains
// Figure out how to scale cabin for mobile

function Header() {
  return (
    <div>
      <div>
        <div className="mountains"></div>
        <img className="centerCabin" src={Cabin} alt="Cabin" />
        <div className="name-date">
          <div className="ourName1">Lilia & Dave</div>
          <div className="ourName2">Lilia & Dave</div>
          <div className="ourName3">Lilia & Dave</div>
          <div className="ourName4">Lilia & Dave</div>
          <div className="ourName5">Lilia & Dave</div>
          <div className="ourDate">May 1st, 2021</div>
          <div className="ourLocation">Lincoln, Montana</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
