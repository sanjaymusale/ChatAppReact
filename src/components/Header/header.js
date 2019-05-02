import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <div className="circle" />

        <span>MARK ZUKERBERG</span>
      </div>
      <div className="header-close">
        <img
          src={process.env.PUBLIC_URL + "/close.svg"}
          alt=""
          width="20px"
          height="20px"
        />
      </div>
    </div>
  );
}

export default Header;
