import "../styleFolder/SearchBar.css";
import React,{ useCallback, useEffect, useMemo, useState } from "react";

function SearchComponent({ initialItems, term, handleChange }) {
  const [searchInput, setSearchInput] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [current, setCurrent] = useState(0);

  const TotalSlide = useMemo(
    () => [
      "Speaker",
      "Mobile",
      "Tv",
      "IPhone",
      "Laptop", 
      "HeadPhone",
      "Smartwatch",
    ],
    []
  );

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrent((prev) => (prev === TotalSlide.length - 1 ? 0 : prev + 1));
  //   }, 3000);
  //   return () => clearInterval(timer);
  // }, []);
  // console.log("KKKK");

  useEffect(() => {
    const results = initialItems.filter((item) =>
      item.includes(searchInput.toLowerCase())
    );
    setFilteredItems(results);
    // console.log(filteredItems);
  }, [searchInput, initialItems]);

  // console.log(filteredItems);
  return (
    <div>
      <div className="search-bar">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="search"
          // placeholder="Searching for..."
          placeholder={`Search for "${TotalSlide[current]}"`}
          value={term}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
export default React.memo(SearchComponent);
