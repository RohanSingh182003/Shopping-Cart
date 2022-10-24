import React from "react";
import { TiTick } from 'react-icons/ti';


const Size = ({item , setSize , size}) => {
  return (
    <button
      key={item}
      onClick={() => {
        setSize(item);
      }}
      className="border-2 border-gray-300 rounded-md w-10 h-6 focus:outline-none focus:ring-pink-200 focus:border-secondary relative"
    >
      {item} {item === size ? <TiTick className="absolute -top-3 -right-1 text-2xl"/> : ''}
    </button>
  );
};

export default Size;
