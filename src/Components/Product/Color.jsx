import React from "react";
import { TiTick } from 'react-icons/ti';

const Color = ({ item , setColor , color }) => {
  return (
    <button
      key={item}
      onClick={() => {
        setColor(item);
      }}
      style={{ backgroundColor: item }}
      className="border-2 border-gray-300 rounded-full w-6 h-6"
    >
      {item === color ? <TiTick className={`text-xl ${color!='black'?'text-black':'text-white'}`} />:''}
    </button>
  );
};

export default Color;
