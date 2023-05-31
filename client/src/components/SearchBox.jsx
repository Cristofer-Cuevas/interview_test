import PropTypes from "prop-types";

const SearchBox = ({ getInputValue, searchType }) => {
  const handleSearchBoxInput = (e) => {
    getInputValue(e.target.value);
  };
  return (
    <div className="searchBox">
      <input
        className="inputSearch"
        type="text"
        placeholder={searchType}
        onChange={handleSearchBoxInput}
      />
    </div>
  );
};

SearchBox.propTypes = {
  searchType: PropTypes.string,
  getInputValue: PropTypes.func,
};

export default SearchBox;
