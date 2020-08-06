import React, { memo } from "react";
import Profile from "components/profile";
import Stack from "components/stack";
import StackItem from "components/stack/StackItem";
import Upgrade from "components/upgrade";
import UsageSpace from "components/space-usage";

const Summary = () => {
  return (
    <aside className="col-span-2 row-span-6 hidden lg:block">
      <Profile />
      <UsageSpace />
      <Stack title="Information" className="mt-8">
        <StackItem className="flex my-3">
          <span className="ri-image-line ri-2x h-12 w-12 bg-blue-100 text-center inline-block rounded text-blue-500 mr-3"></span>
          <div>
            <p>Images</p>
            <small className="text-gray-700 text-sm">5057 files</small>
          </div>
          <span className="inline-block self-center text-blue-500 ml-auto mr-3">
            5,5 GB
          </span>
        </StackItem>
        <StackItem className="flex my-3">
          <span className="ri-film-line ri-2x h-12 w-12 bg-red-100 text-center inline-block rounded text-red-500 mr-3"></span>
          <div>
            <p>Vidio</p>
            <small className="text-gray-700 text-sm">300 files</small>
          </div>
          <span className="inline-block self-center text-blue-500 ml-auto mr-3">
            4,7 GB
          </span>
        </StackItem>
        <StackItem className="flex my-3">
          <span className="ri-file-text-line ri-2x h-12 w-12 bg-orange-100 text-center inline-block rounded text-orange-500 mr-3"></span>
          <div>
            <p>Document</p>
            <small className="text-gray-700 text-sm">248 files</small>
          </div>
          <span className="inline-block self-center text-blue-500 ml-auto mr-3">
            3,2 GB
          </span>
        </StackItem>
        <StackItem className="flex my-3">
          <span className="ri-function-line ri-2x h-12 w-12 bg-teal-100 text-center inline-block rounded text-teal-400 mr-3"></span>
          <div>
            <p>Other Files</p>
            <small className="text-gray-700 text-sm">190 files</small>
          </div>
          <span className="inline-block self-center text-blue-500 ml-auto mr-3">
            5,5 GB
          </span>
        </StackItem>
        <StackItem className="flex my-3">
          <span className="ri-folder-line ri-2x h-12 w-12 bg-blue-100 text-center inline-block rounded text-blue-500 mr-3"></span>
          <p className="self-center">Free Space</p>
          <span className="inline-block self-center text-blue-500 ml-auto mr-3">
            10,5 GB
          </span>
        </StackItem>
      </Stack>
      <Upgrade />
    </aside>
  );
};

export default memo(Summary);
