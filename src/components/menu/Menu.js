import React, { memo } from "react";

const Menu = () => {
  return (
    <nav className="bg-blue-600 py-6 h-full w-16">
      <div className="mx-auto mb-6 p-2 w-10 h-10 bg-white text-center rounded-full">
        <span className="ri-cloud-fill ri-lg inline-block align-middle text-blue-600"></span>
      </div>
      <ol>
        <li className="px-1 py-4 bg-blue-500 bg-opacity-50 text-center text-white border-l-2 border-white">
          <span className="ri-file-line ri-lg inline-block align-middle"></span>
        </li>
        <li className="px-1 py-5 text-center text-white">
          <span className="ri-chat-4-line ri-lg inline-block align-middle"></span>
        </li>
        <li className="px-1 py-5 text-center text-white">
          <span className="ri-user-3-line ri-lg inline-block align-middle"></span>
        </li>
        <li className="px-1 py-5 text-center text-white">
          <span className="ri-notification-2-line ri-lg inline-block align-middle"></span>
        </li>
        <li className="px-1 py-5 text-center text-white">
          <span className="ri-settings-5-line ri-lg inline-block align-middle"></span>
        </li>
        <li className="px-1 py-5 text-center text-white">
          <span className="ri-login-box-line ri-lg inline-block align-middle"></span>
        </li>
      </ol>
    </nav>
  );
};

export default memo(Menu);
