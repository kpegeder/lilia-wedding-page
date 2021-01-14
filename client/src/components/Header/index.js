import React from "react";
import "./style.css";
import Cabin from "../../assets/images/Cabin.png";

function Header() {
  return (
    <div>
      <div>
        <div className="mountains"></div>
        <img className="centerCabin" src={Cabin} alt="Cabin" loading="lazy" />
        <div className="name-date">
          <div className="ourName">Lilia & Dave</div>
          <div className="ourDate">May 1, 2021</div>
          <div className="ourLocation">Lincoln, Montana</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
