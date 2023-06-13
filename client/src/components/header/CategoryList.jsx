import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";

function CategoryList({ page }) {
  const [categories, setCategories] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const { performFetch, cancelFetch } = useFetch("/category", (response) => {
    setCategories(response.result);
  });

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    performFetch();
    return cancelFetch;
  }, []);

  const renderCategories = () => {
    if (!categories) return null;

    return categories.map((category) => (
      <li
        className="header-category-list-item"
        key={category._id}
        value={category.categoryName}
      >
        <Link to={{ pathname: `/products/${category.categoryName}` }}>
          {category.categoryName}
        </Link>
      </li>
    ));
  };

  return (
    <menu
      className={`header-category-list-block ${
        page === "allProducts" ? "invisible" : ""
      }`}
    >
      <p className="header-category-title">Categories</p>

      <MdExpandMore
        onClick={toggleVisibility}
        className="header-category-arrow"
        alt="arrow"
        size={30}
      />
      {isVisible && (
        <ul
          name="category"
          id="category-select"
          className="header-category-list"
        >
          {renderCategories()}
        </ul>
      )}
    </menu>
  );
}

CategoryList.propTypes = {
  page: PropTypes.string,
};

export default CategoryList;
