import React from "react";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";
import SizeFilter from "./SizeFilter";

const Filter = () => {
  return (
    <div className="rounded-md p-4 bg-gradient-to-b from-pink-200">
      <h4 className="text-xl text-center pb-2 border-b">Select Filters</h4>
      <div className="flex flex-col h-full justify-evenly">
        {/* filter by price */}
        <div className="form-control w-full pb-2 border-b">
          <PriceFilter price={500} />
          <PriceFilter price={1000} />
          <PriceFilter price={2000} />
          <PriceFilter price={5000} />
        </div>
        {/* filter by price */}
        <div className="form-control w-full pb-2 border-b">
          <RatingFilter rating={3}/>
          <RatingFilter rating={4}/>
        </div>
        {/* filter by colors */}
        <div className="form-control w-full pb-2 border-b flex flex-row justify-evenly">
          <ColorFilter color='red'/>
          <ColorFilter color='black'/>
          <ColorFilter color='blue'/>
          <ColorFilter color='white'/>
          <ColorFilter color='yellow'/>
        </div>
        {/* filter by size */}
        <div className="form-control w-full pb-2 border-b flex flex-row justify-evenly">
          <SizeFilter size='S'/>
          <SizeFilter size='M'/>
          <SizeFilter size='L'/>
          <SizeFilter size='XXL'/>
          <SizeFilter size='XXXL'/>
        </div>
        {/* remove filters */}
        <button className="btn btn-error w-full text-white shadow-lg">Set Default</button>
      </div>
    </div>
  );
};

export default Filter;
