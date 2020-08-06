import React, { memo } from "react";
import Button from "components/button";
import Menu from "components/menu";
import Section from "components/section";
import Stack from "components/stack";
import StackItem from "components/stack/StackItem";

import dropbox from "assets/img/icons/dropbox.svg";
import onedrive from "assets/img/icons/onedrive.svg";
import gdrive from "assets/img/icons/google-drive.svg";

const Sidebar = () => {
  return (
    <aside className="row-span-6 hidden lg:flex lg:col-span-3">
      <Menu />
      <div className="py-6 ml-6 mr-4 flex-grow">
        <div className="flex flex-wrap">
          <h1 className="text-2xl">My Files</h1>
          <span className="ri-arrow-down-s-line ri-lg self-center block ml-auto text-blue-400"></span>
          <small className="block w-full text-gray-700">1597 files</small>
        </div>
        <Section className="my-8" title="Storage">
          <Stack>
            <StackItem className="flex bg-blue-100 rounded-lg p-4">
              <img
                className="p-2 mr-2 w-10 h-10 bg-white"
                src={dropbox}
                alt="Dropbox icon"
              />
              <div>
                <h4>Dropbox</h4>
                <small className="text-gray-700 text-xs">15,5 GB/20 GB</small>
              </div>
            </StackItem>
            <StackItem className="flex rounded-lg p-4">
              <img
                className="p-2 mr-2 w-10 h-10 bg-gray-200"
                src={onedrive}
                alt="OneDrive icon"
              />
              <div>
                <h4>OndeDrive</h4>
                <small className="text-gray-700 text-xs">3,5 GB/5,5 GB</small>
              </div>
            </StackItem>
            <StackItem className="flex rounded-lg p-4">
              <img
                className="p-2 mr-2 w-10 h-10 bg-gray-200"
                src={gdrive}
                alt="Google Drive icon"
              />
              <div>
                <h4>Google Drive</h4>
                <small className="text-gray-700 text-xs">40,5 GB/50 GB</small>
              </div>
            </StackItem>
          </Stack>
        </Section>
        <Section>
          <Stack>
            <StackItem className="text-gray-700 mb-4">
              <span className="ri-share-line ri-lg inline-block align-middle mr-3"></span>
              Shared with me
            </StackItem>
            <StackItem className="text-gray-700 mb-4">
              <span className="ri-time-line ri-lg inline-block align-middle mr-3"></span>
              Recent
            </StackItem>
            <StackItem className="text-gray-700 mb-4">
              <span className="ri-star-line ri-lg inline-block align-middle mr-3"></span>
              Favorites
            </StackItem>
            <StackItem className="text-gray-700 mb-4">
              <span className="ri-delete-bin-7-line ri-lg inline-block align-middle mr-3"></span>
              Trash
            </StackItem>
          </Stack>
        </Section>
        <Button className="text-white w-full">
          Create new{" "}
          <span className="ri-add-line inline-block ml-1 align-middle"></span>
        </Button>
      </div>
    </aside>
  );
};

export default memo(Sidebar);
