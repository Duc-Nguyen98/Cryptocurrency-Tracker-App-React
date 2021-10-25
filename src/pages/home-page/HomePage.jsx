/*==========================================
Title:  Bee-Cryptocurrency-Tracker
Date:   24-Oct-2021
==========================================*/
import React from "react";

//? import Component
import Banner from "../../components/banner/Banner";
import CoinsTable from "../../components/coins-table/CoinsTable";

const HomePage = () => {
  return (
    <>
      <Banner />
      <CoinsTable />
    </>
  );
};
export default HomePage;
