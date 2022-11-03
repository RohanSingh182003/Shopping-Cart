import React from "react";
import { AiFillStar } from 'react-icons/ai';


const RatingFilter = ({rating}) => {
  return (
    <label className="label cursor-pointer">
      <div className="label-text flex items-center">
        <p>Above</p> 
        {rating ===3 ?<div className="flex flex-wrap"><AiFillStar className="text-yellow-400 text-xl ml-1"/><AiFillStar className="text-yellow-400 text-xl ml-1"/><AiFillStar className="text-yellow-400 text-xl ml-1"/></div>:null}
        {rating ===4 ?<div className="flex flex-wrap"><AiFillStar className="text-yellow-400 text-xl ml-1"/><AiFillStar className="text-yellow-400 text-xl ml-1"/><AiFillStar className="text-yellow-400 text-xl ml-1"/><AiFillStar className="text-yellow-400 text-xl ml-1"/></div>:null}
      </div>
      <input
        type="radio"
        name="radio-6"
        className="radio radio-secondary"
      />
    </label>
  );
};

export default RatingFilter;
