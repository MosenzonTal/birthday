import React from "react";
import img from "./meAndBab.jpeg";
import "./imageCss.css";
function Footer() {
  return (
    <div>
      <img src={img} className="myImage"/>
    </div>
  );
}

export default Footer;