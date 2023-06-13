import React from "react";
import logo from "../../assets/logo.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Logo({ position }) {
  const logoClassName = position === "footer" ? "footer-logo" : "header-logo";

  return (
    <Link to="/" className="nav-buttons">
      <img className={logoClassName} src={logo} alt="sugar rush" />
    </Link>
  );
}

Logo.propTypes = {
  position: PropTypes.string,
};

export default Logo;
