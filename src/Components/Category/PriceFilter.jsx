import React from "react";

const PriceFilter = ({price}) => {
  return (
    <label className="label cursor-pointer">
      <span className="label-text">Under ₹{price}</span>
      <input type="radio" name="radio-3" className="radio radio-secondary" />
    </label>
  );
};

export default PriceFilter;
