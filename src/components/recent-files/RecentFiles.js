import React, { memo } from 'react';
import Section from 'components/section';

const RecentFiles = () => {
  return (
    <Section
      className="mb-8"
      title="Recent Files"
      link={{ name: 'See all' }}
    >
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="text-sm pb-2 text-left font-normal">
              Name{' '}
              <span className="inline-block ri-lg ml-1 align-middle ri-arrow-down-s-line"></span>
            </th>
            <th className="text-sm pb-2 text-left font-normal hidden lg:table-cell">
              Format
            </th>
            <th className="text-sm pb-2 text-left font-normal hidden lg:table-cell">
              Size
            </th>
            <th className="text-sm pb-2 text-left font-normal hidden lg:table-cell">
              Last Modified
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 text-sm">
              <span className="inline-block mr-3 rounded-sm px-1 py-2 align-middle h-8 w-8 text-white text-xs font-medium text-center bg-blue-500">
                PNG
              </span>
              Dashboard File Project
            </td>
            <td className="py-3 text-gray-700 text-sm hidden lg:table-cell">
              PNG
            </td>
            <td className="py-3 text-gray-700 text-sm hidden lg:table-cell">
              50 Kb
            </td>
            <td className="py-3 text-gray-700 text-sm hidden lg:table-cell">
              Jul 15, 2020
            </td>
            <td>
              <button className="block focus:outline-none">
                <span className="ri-more-line ri-lg inline-block align-middle text-center text-gray-600"></span>
              </button>
            </td>
          </tr>
          <tr>
            <td className="py-3 text-sm">
              <span className="inline-block mr-3 rounded-sm px-1 py-2 align-middle h-8 w-8 text-white text-xs font-medium text-center bg-red-500">
                MP4
              </span>
              Figma Design Tutorials
            </td>
            <td className="py-3 text-gray-700 text-sm hidden lg:table-cell">
              MP4
            </td>
            <td className="py-3 text-gray-700 text-sm hidden lg:table-cell">
              50 Mb
            </td>
            <td className="py-3 text-gray-700 text-sm hidden lg:table-cell">
              Jul 15, 2020
            </td>
            <td>
              <button className="block focus:outline-none">
                <span className="ri-more-line ri-lg inline-block align-middle text-center text-gray-600"></span>
              </button>
            </td>
          </tr>
          <tr>
            <td className="py-3 text-sm">
              <span className="inline-block mr-3 rounded-sm px-1 py-2 align-middle h-8 w-8 text-white text-xs font-medium text-center bg-pink-500">
                XD
              </span>
              Prototype Project
            </td>
            <td className="py-3 text-gray-700 text-sm hidden lg:table-cell">
              XD
            </td>
            <td className="py-3 text-gray-700 text-sm hidden lg:table-cell">
              20 Mb
            </td>
            <td className="py-3 text-gray-700 text-sm hidden lg:table-cell">
              Jul 13, 2020
            </td>
            <td>
              <button className="block focus:outline-none">
                <span className="ri-more-line ri-lg inline-block align-middle text-center text-gray-600"></span>
              </button>
            </td>
          </tr>
          <tr>
            <td className="py-3 text-sm">
              <span className="inline-block mr-3 rounded-sm px-1 py-2 align-middle h-8 w-8 text-white text-xs font-medium text-center bg-green-500">
                XLS
              </span>
              Financial Statements
            </td>
            <td className="py-3 text-gray-700 text-sm hidden lg:table-cell">
              XLS
            </td>
            <td className="py-3 text-gray-700 text-sm hidden lg:table-cell">
              10 Mb
            </td>
            <td className="py-3 text-gray-700 text-sm hidden lg:table-cell">
              Jul 30, 2020
            </td>
            <td>
              <button className="block focus:outline-none">
                <span className="ri-more-line ri-lg inline-block align-middle text-center text-gray-600"></span>
              </button>
            </td>
          </tr>
          <tr>
            <td className="py-3 text-sm">
              <span className="inline-block mr-3 rounded-sm px-1 py-2 align-middle h-8 w-8 text-white text-xs font-medium text-center bg-teal-400">
                PSD
              </span>
              Finishing Project
            </td>
            <td className="py-3 text-gray-700 text-sm hidden lg:table-cell">
              PNG
            </td>
            <td className="py-3 text-gray-700 text-sm hidden lg:table-cell">
              95 Mb
            </td>
            <td className="py-3 text-gray-700 text-sm hidden lg:table-cell">
              Jul 29, 2020
            </td>
            <td>
              <button className="block focus:outline-none">
                <span className="ri-more-line ri-lg inline-block align-middle text-center text-gray-600"></span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
};

export default memo(RecentFiles);