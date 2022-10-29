import React from "react";

const Loading = () => {
  return (
    <div className="h-80 md:h-96 w-full flex flex-col justify-center items-center col-span-3">
      <p className="text-2xl text-secondary font-semibold">
        Products are loading!
      </p>
      <p className="text-xs my-2 text-secondary">
        Please wait , we are thankful for your patience.
      </p>
    </div>
  );
};

export default Loading;
