import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useFavorites } from "../../store/FavoritesContext";
import PropTypes from "prop-types";

const FavoriteIcon = ({ product }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = product && favorites.some((p) => p._id === product._id);

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(product);
    } else {
      addFavorite(product);
    }
  };

  return (
    <div className="favorite-icon" onClick={handleClick}>
      {isFavorite ? (
        <MdFavorite size={40} style={{ color: "#f095c4" }} />
      ) : (
        <MdFavoriteBorder size={40} style={{ color: "black" }} />
      )}
    </div>
  );
};
FavoriteIcon.propTypes = {
  product: PropTypes.object,
};
export default FavoriteIcon;
