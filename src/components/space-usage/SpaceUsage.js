import React, { memo } from "react";
import Chart from "assets/img/illustration/chart.svg";

const SpaceUsage = () => {
  return (
    <div className="flex flex-wrap items-end content-end justify-center mt-6 relative h-32">
      <img src={Chart} alt="Space usage" className="absolute w-full" />
      <h3 className="w-full text-2xl text-center text-gray-800">
        10,5 <small className="text-blue-600">GB</small>
      </h3>
      <p className="w-full text-xl text-center text-blue-500">Free</p>
      <small className="block w-full text-xs text-center text-gray-700">
        15,5 <span className="text-blue-500 text-center">Used</span>
      </small>
    </div>
  );
};

export default memo(SpaceUsage);
