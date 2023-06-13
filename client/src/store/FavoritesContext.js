import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const FavoritesContext = createContext([]);

export const useFavorites = () => {
  const [favorites, setFavorites] = useContext(FavoritesContext);

  const updateFavorites = (updatedFavorites) => {
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const addFavorite = (item) => {
    const updatedFavorites = [...favorites, item];
    updateFavorites(updatedFavorites);
  };

  const removeFavorite = (item) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite._id !== item._id
    );
    updateFavorites(updatedFavorites);
  };

  const isFavorite = (item) => {
    return favorites.some((favorite) => favorite._id === item._id);
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
};

export const FavoritesProvider = (props) => {
  const storedFavorites = localStorage.getItem("favorites");
  const favoritesState = useState(
    storedFavorites ? JSON.parse(storedFavorites) : []
  );

  const [favorites] = favoritesState;

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={favoritesState}>
      {" "}
      {props.children}{" "}
    </FavoritesContext.Provider>
  );
};

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
