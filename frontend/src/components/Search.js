import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder={`Search Notes by ${props.searchKey}`}
        onChange={(e) => {
          props.filterNotes(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
