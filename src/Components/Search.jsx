import React from "react";
import { ImSearch } from "react-icons/im";

const Search = () => {
  return (
    <div className="grid place-items-center m-2">
      <form className="mx-auto flex items-center border rounded-md">
        <input placeholder="Search Product Catagory" className="rounded-l-md focus:outline-none px-2 py-1" type="text" name="search" id="search" />
        <button className="mx-1 text-xl"><ImSearch className="text-violet-500 hover:text-violet-700"/></button>
      </form>
    </div>
  );
};

export default Search;
