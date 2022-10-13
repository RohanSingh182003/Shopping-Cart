import React, { useState } from "react";
import { toast } from "react-toastify";
import useFetch from "../CustomHooks/useFetch";

const Check_Servicebility = () => {
  const {data} = useFetch('https://rohansingh182003.github.io/JSON-files-for-rapid-development/pincodes.json')
  const [pin, setPin] = useState(null)
  const checkPin = () => {
    if(data.includes(Number.parseInt(pin))){
    toast.success('Pin code is serviceable.')
  }
  else{
    toast.error('Oops! this pincode is not serviceable.')
    setPin('')
  }
  }
  return (
    <div className="border-b-2 border-purple-500 w-fit px-2 my-6 md:my-4">
      <input
      value={pin}
      onChange={((e)=> setPin(e.target.value))}
        placeholder="Enter delivery pincode"
        className="text-violet-700 focus:outline-none"
        type="text"
      />
      <button onClick={checkPin} className="py-1 px-2 m-1 rounded-md text-purple-50 bg-purple-500 hover:bg-purple-600">
        Check
      </button>
    </div>
  );
};

export default Check_Servicebility;
