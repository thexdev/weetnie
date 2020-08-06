import React, { memo } from 'react';

const Sidebar = () => {
  return (
    <div className="flex rounded-lg bg-white py-3 px-4">
      <button className="inline-block mr-4 focus:outline-none">
        <span className="ri-search-line ri-lg inline-block align-middle text-blue-600"></span>
      </button>
      <input
        className="inline-block w-full outline-none"
        type="text"
        placeholder="Search files"
      />
    </div>
  );
};

export default memo(Sidebar);
