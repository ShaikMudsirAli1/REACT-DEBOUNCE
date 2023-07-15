const SearchInput = ({ searchValue, setSearchValue }) => {
  return (
    <main>
      {/* <br />
      <br />

      <label
        className="search-name"
      >
        SEARCH APP
      </label> */}
      <br />
      <br />
      <h1 className="search-name">SEARCH APP</h1>
      <input
        className="search-input"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search wiki ..."
        autoFocus
      />
    </main>
  );
};
export default SearchInput;
