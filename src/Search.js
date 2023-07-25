import React from "react";
import SearchIcon from './assets/icons/Search.svg' 

const Search = ({ setSearchQuery }) => {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search">
      <input type="text" placeholder="Поиск" onChange={handleSearch} />
      <img src={SearchIcon} onClick={handleSearch}/>
    </div>
  );
};

export default Search;