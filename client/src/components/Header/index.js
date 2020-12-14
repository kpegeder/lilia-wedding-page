import React from "react";
import "./style.css";

function Header() {
  return (
    <div>
      <div className="nav-intro-section mountains">
        <img
          className="center"
          src="./assets/images/Cabin.png"
          style={{ height: 300, width: 500 }}
          alt="Cabin"
        />
        <ul className="links">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/WeddingParty">Wedding Party</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
