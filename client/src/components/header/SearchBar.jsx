import React, { useState } from "react";
import useSearch from "../../hooks/useSearch";
import { Link } from "react-router-dom";

function SearchBar() {
  const [searchWord, setSearchWord] = useState("");
  const [handleSearch, showSuggestions] = useSearch(searchWord);
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (event) => {
    const word = event.target.value;
    await setSearchWord(word);
    setSuggestions(word === "" ? [] : showSuggestions(word));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
      setSearchWord("");
      setSuggestions([]);
    }
  };

  return (
    <>
      <input
        placeholder="Search | "
        className="header-search-input"
        value={searchWord}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      ></input>
      <div className="header-search-suggestion-block ">
        {suggestions &&
          suggestions.slice(0, 5).map((suggestion, index) => (
            <div key={index}>
              <Link
                to={`/product/${suggestion._id}`}
                className="header-search-suggestion"
                key={index}
              >
                {suggestion.productName}
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default SearchBar;
