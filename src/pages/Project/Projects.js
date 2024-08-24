import React from "react";
import Layout from "../../components/Layout/Layout";
import "../../styles/HomeStyle.css";
import Breadcrumb from "./Breadcrumb-section";
import Casestudy from "../Home/Casestudy-section";
import Newsletter from "../Home/Newsletter-section";
function Service() {
  return (
    <Layout>
      {/* Breadcrumb-section */}
      <Breadcrumb />
      <Casestudy />
      <Newsletter />
    </Layout>
  );
}
export default Service;
