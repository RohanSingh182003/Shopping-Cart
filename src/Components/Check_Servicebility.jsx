import React from "react";

const Check_Servicebility = () => {
  return (
    <form className="border-b-2 border-purple-500 w-fit px-2 my-6 md:my-4">
      <input
        placeholder="Enter delivery pincode"
        className="text-violet-700 focus:outline-none"
        type="text"
      />
      <button className="py-1 px-2 m-1 rounded-md text-purple-50 bg-purple-500 hover:bg-purple-600">
        Check
      </button>
    </form>
  );
};

export default Check_Servicebility;
