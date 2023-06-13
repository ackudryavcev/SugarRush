import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import CategoryList from "./CategoryList";
import AllProductsLink from "./AllProductsLink";
import "./header.css";
import MainTitle from "./MainTitle";
import DonutOne from "./DonutOne";
import DonutTwo from "./DonutTwo";
import FavoriteButton from "./FavoriteButton";
import CartButton from "./CartButton";

function Header({ page }) {
  const renderTopSection = () => (
    <div className="top-section">
      <SearchBar />
      <div className="cart-and-favorites-buttons">
        <FavoriteButton />
        <CartButton />
      </div>
    </div>
  );

  const renderBottomSection = () => (
    <div className="bottom-section">
      <CategoryList page={page} />
      <AllProductsLink page={page} />
    </div>
  );

  return (
    <header className={`header${page === "allProducts" ? "-allProducts" : ""}`}>
      <div className="header-elements">
        <div className="navbar-main-elements">
          <Logo />
          <div className="sections">
            {renderTopSection()}
            {renderBottomSection()}
          </div>
        </div>
        <div className="donut">
          <DonutOne />
          <DonutTwo />
        </div>
        <MainTitle page={page} />
      </div>
    </header>
  );
}

Header.propTypes = {
  page: PropTypes.string,
};

export default Header;
