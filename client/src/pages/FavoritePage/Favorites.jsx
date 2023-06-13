import React, { useContext } from "react";
import Header from "../../components/header/Header";
import ProductOverview from "../../components/ProductDisplay/ProductOverview";
import Basket from "../../components/ProductDisplay/Basket";
import ProductTitleAndPrice from "../../components/ProductDisplay/ProductTitleAndPrice";
import Rating from "../../components/ProductDisplay/Rating";
import Footer from "../../components/Footer/Footer";
import { FavoritesContext } from "../../store/FavoritesContext";
import FavoriteIcon from "../../components/ProductDisplay/FavoriteIcon";
import "./Favorite.css";
import { Link } from "react-router-dom";

function Favorites() {
  const [favorites] = useContext(FavoritesContext);
  return (
    <>
      <Header />
      <div>
        <div className="favorite-block">
          {favorites.length === 0 && (
            <h3 className="favorite-title">
              You do not have favorite sweets yet. Add to your favorites and you
              will see them here
            </h3>
          )}
          {favorites.length > 0 && (
            <h3 className="favorite-title">Here are your favorite sweets</h3>
          )}
          <div className="product-display-grid">
            {favorites &&
              favorites.map((product) => {
                return (
                  <div className="product-display-component" key={product._id}>
                    <ProductOverview product={product} />
                    <div className="white-background">
                      <ProductTitleAndPrice product={product} />
                      <Rating productRating={product.rate} product={product} />
                      <div className="product-options">
                        <FavoriteIcon product={product} />
                        <Basket product={product} />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="favorite-link">
            <Link to="/products">Go to add more favorites</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Favorites;
