import React, { memo } from "react";
import Section from "components/section";

const QuickAccess = () => {
  return (
    <Section className="mb-12" title="Quick Access" link={{ name: "View all" }}>
      <div className="grid grid-cols-9 gap-4">
        <div className="col-span-9 lg:col-span-3 flex p-6 rounded-lg bg-white">
          <span className="ri-image-line ri-2x text-center h-12 w-12 bg-blue-500 rounded mr-4 inline-block text-white"></span>
          <div className="inline-block">
            <h3 className="text-base">Images</h3>
            <small className="text-xs text-gray-700">5,5 GB/20 GB</small>
          </div>
          <button className="inline-block ml-auto focus:outline-none">
            <span className="ri-more-2-fill ri-xl inline-block align-middle text-gray-500"></span>
          </button>
        </div>
        <div className="col-span-9 lg:col-span-3 flex p-6 rounded-lg bg-white">
          <span className="ri-film-line ri-2x text-center h-12 w-12 bg-red-500 rounded mr-4 inline-block text-white"></span>
          <div className="inline-block">
            <h3 className="text-base">Vidio</h3>
            <small className="text-xs text-gray-700">5,5 GB/20 GB</small>
          </div>
          <button className="inline-block ml-auto focus:outline-none">
            <span className="ri-more-2-fill ri-xl inline-block align-middle text-gray-500"></span>
          </button>
        </div>
        <div className="col-span-9 lg:col-span-3 flex p-6 rounded-lg bg-white">
          <span className="ri-file-text-line ri-2x text-center h-12 w-12 bg-orange-500 rounded mr-4 inline-block text-white"></span>
          <div className="inline-block">
            <h3 className="text-base">Document</h3>
            <small className="text-xs text-gray-700">5,5 GB/20 GB</small>
          </div>
          <button className="inline-block ml-auto focus:outline-none">
            <span className="ri-more-2-fill ri-xl inline-block align-middle text-gray-500"></span>
          </button>
        </div>
      </div>
    </Section>
  );
};

export default memo(QuickAccess);
