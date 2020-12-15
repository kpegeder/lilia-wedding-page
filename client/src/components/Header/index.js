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
        <img
          className="center"
          src={Cabin}
          style={{ height: 300, width: 500 }}
          alt="Cabin"
        />
        <div className="name-date">
          <h1>Lilia & Dave</h1>
          <h2>May 1st, 2021 &bull; Lincoln, Montana</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
