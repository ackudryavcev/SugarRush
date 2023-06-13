import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./categories.css";

export default function Category({ image, categoryName, description }) {
  const link = `/products/${categoryName}`;
  return (
    <div className="category-container">
      <img src={image} alt="" className="category-image" />

      <div className="category-text-container">
        <div className="category-title background">{categoryName}</div>
        <div className="category-description background">{description}</div>
        <Link to={link}>
          <button className="category-button-main"> SHOP NOW </button>
        </Link>
      </div>
    </div>
  );
}

Category.propTypes = {
  image: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
