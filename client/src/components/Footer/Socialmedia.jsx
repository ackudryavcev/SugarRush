import React from "react";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";
import Twitter from "../../assets/Twitter.svg";
import Linkedin from "../../assets/Linkedin.svg";
function Socialmedia() {
  return (
    <div className="social-media">
      <img src={Facebook} alt="Facebook icon" />
      <img src={Instagram} alt=" Instgaram icon" />
      <img src={Twitter} alt="Twitter icon" />
      <img src={Linkedin} alt="Linkedin icon" />
    </div>
  );
}

export default Socialmedia;
