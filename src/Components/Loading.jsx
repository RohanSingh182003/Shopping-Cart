import React from "react";

const Loading = () => {
  return (
    <div className="h-80 md:h-96 w-full flex flex-col justify-center items-center">
      <p className="text-2xl text-violet-600 font-semibold">
        Products are loading!
      </p>
      <p className="text-xs my-2 text-violet-400">
        Please wait , we are thankful for your patience.
      </p>
    </div>
  );
};

export default Loading;
