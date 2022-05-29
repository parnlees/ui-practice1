import React from "react";
import logo from "../image/logo.png";
import { button } from "bootstrap";

function Header() {
  return (
    <div className="d-flex justify-content-between container">
      <div className="d-flex align-items-center">
        <img style={{ width: "50px", height: "50px" }} src={logo} alt="logo" />
        <h6 className="align-self-center mb-0 text-light">
          <b>Welcome Home</b>
        </h6>
      </div>
      <div className="d-flex align-items-center">
        <button className="mx-3 btn btn-outline-info">Login</button>
        <button className="mx-3 btn btn-outline-info">Contact Us</button>
      </div>
    </div>
  );
}

export default Header;
