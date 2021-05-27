import React, { useState } from "react";
import axios from "axios";
function SearchPage() {
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [searchResultData, setSearchResultData] = useState([]);
  const bringSearchResult = (keyWord) => {
    axios
      .get(`http://localhost:5200/plant/${keyWord}`)
      .then((response) => {
        console.log(response.data);
        setSearchResultData(response.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="body d-flex flex-column align-items-center">
      <div className="d-flex w-25 mt-5">
        <input
          type="text"
          name="keyword"
          className="w-75 px-2 py-1 form-control"
          value={searchKeyWord}
          onChange={(e) => setSearchKeyWord(e.target.value)}
        ></input>
        <button
          className="w-25 btn btn-primary"
          onClick={() => bringSearchResult(searchKeyWord)}
        >
          SEARCH
        </button>
      </div>
      <div className="border border-dark w-75 mt-5" style={{ height: "400px" }}>
        {searchResultData.map((item, index) => {
          return (
            <img
              key={index}
              className="w-25 h-100"
              src={`http://localhost:5200/${item.photo}`}
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default SearchPage;
