import React from "react";
import "./Footer.css";
import Logo from "../header/Logo";
import Socialmedia from "./Socialmedia";

function Footer() {
  return (
    <footer>
      <div className="footer-information">
        <h4>Categories</h4>

        <div>
          <ul className="footer-col">
            <li>Cookies</li>
            <li>Candy Corn</li>
            <li>Lollipop</li>
            <li>Hard Candy</li>
            <li>Vegetarian</li>
          </ul>
        </div>

        <div>
          <ul className="footer-contact">
            <li>Phone : 06-123-321-89</li>
            <li>Email : info@sugarrush.com</li>
            <li>Adress: Sugarrush 1 , 8937 SR Netherland</li>
          </ul>
        </div>
        <div className="footer-copyright">
          <li>Copyright information:</li>
          <li>&copy;2023 Sugar Rush. All rights reserved</li>
          <li>
            Created with <span className="heart">&#10084;</span>| HYF Class41
            Team 1
          </li>
        </div>
      </div>
      <div className="footer-sugarRush">
        <Logo className="footer-Logo" />
        <Socialmedia className="footer-socialmedia" />
      </div>
    </footer>
  );
}

export default Footer;
