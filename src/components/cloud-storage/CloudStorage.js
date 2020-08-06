import React, { memo } from "react";
import Section from "components/section";

import dropbox from "assets/img/icons/dropbox.svg";
import onedrive from "assets/img/icons/onedrive.svg";
import gdrive from "assets/img/icons/google-drive.svg";

const CloudStorage = () => {
  return (
    <Section className="mt-6 mb-12" title="Cloud Storage">
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-4">
        <div className="col-span-1 lg:col-span-3 p-4 bg-blue-600 shadow-xl rounded-lg">
          <div className="flex">
            <figure className="px-3 py-4 w-12 h-12 rounded bg-white">
              <img src={dropbox} alt="Dropbox icon" />
            </figure>
            <button className="block ml-auto focus:outline-none">
              <span className="ri-more-fill ri-xl inline-block align-middle text-white"></span>
            </button>
          </div>
          <h2 className="w-full text-xl text-white pt-2 pb-4">Dropbox</h2>
          <div className="flex">
            <small className="block text-base text-white">15,5 GB</small>
            <small className="block ml-auto text-base text-white">30 GB</small>
          </div>
          <div className="pt-1">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-700">
              <div
                style={{ width: "80%" }}
                className="shadow-none rounded-full flex flex-col text-center whitespace-nowrap text-white justify-center bg-white"
              ></div>
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3 p-4 bg-white rounded-lg">
          <div className="flex">
            <figure className="px-3 py-4 w-12 h-12 rounded bg-gray-200">
              <img src={onedrive} alt="OneDrive icon" />
            </figure>
            <button className="block ml-auto focus:outline-none">
              <span className="ri-more-fill ri-xl inline-block align-middle text-gray-500"></span>
            </button>
          </div>
          <h2 className="w-full text-xl text-blue-700 pt-2 pb-4">OneDrive</h2>
          <div className="flex">
            <small className="block text-base text-blue-700">3,5 GB</small>
            <small className="block ml-auto text-base text-blue-700">
              5,5 GB
            </small>
          </div>
          <div className="pt-1">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: "70%" }}
                className="shadow-none rounded-full flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
              ></div>
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3 p-4 bg-white rounded-lg">
          <div className="flex">
            <figure className="px-3 py-4 w-12 h-12 rounded bg-gray-200">
              <img src={gdrive} alt="Google Drive icon" />
            </figure>
            <button className="block ml-auto focus:outline-none">
              <span className="ri-more-fill ri-xl inline-block align-middle text-gray-500"></span>
            </button>
          </div>
          <h2 className="w-full text-xl text-blue-700 pt-2 pb-4">
            Google Drive
          </h2>
          <div className="flex">
            <small className="block text-base text-blue-700">40,5 GB</small>
            <small className="block ml-auto text-base text-blue-700">
              50 GB
            </small>
          </div>
          <div className="pt-1">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: "80%" }}
                className="shadow-none rounded-full flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default memo(CloudStorage);
