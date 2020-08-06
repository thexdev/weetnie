import React, { memo } from "react";

const Profile = () => {
  return (
    <div className="flex flex-row mt-6">
      <img
        className="w-10 h-10 rounded-full"
        src="https://via.placeholder.com/150"
        alt="user profile"
      />
      <p className="self-center ml-auto">M. Akbar Nugroho</p>
      <span className="ri-arrow-down-s-line inline-block ml-auto self-center align-middle"></span>
    </div>
  );
};

export default memo(Profile);
