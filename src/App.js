import React, { memo } from "react";
import CloudStorage from "components/cloud-storage";
import Layout from "components/layout";
import QuickAccess from "components/quick-access";
import RecentFiles from "components/recent-files";
import Searchbar from "components/searchbar";
import Sidebar from "components/sidebar";
import Summary from "components/summary";

const App = () => {
  return (
    <Layout>
      <Sidebar />
      <main className="col-span-12 row-span-6 bg-gray-200 p-6 h-full lg:col-span-7">
        <Searchbar />
        {/* Cloud Storage */}
        <CloudStorage />

        {/* Quick Access */}
        <QuickAccess />

        {/* Recent Files */}
        <RecentFiles />
      </main>
      <Summary />
    </Layout>
  );
};

export default memo(App);
