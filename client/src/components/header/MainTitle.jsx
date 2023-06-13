import React from "react";
import PropTypes from "prop-types";

function MainTitle({ page }) {
  const titleClassName = page === "allProducts" ? "invisible" : "header-title";

  return (
    <h1 className={titleClassName}>
      The ultimate online candy destination for all candy lovers!
    </h1>
  );
}

MainTitle.propTypes = {
  page: PropTypes.string,
};

export default MainTitle;
