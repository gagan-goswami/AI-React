import React from "react";
import Layout from "../../components/Layout/Layout";
import "../../styles/HomeStyle.css";
import Breadcrumb from "../../pages/Service/Breadcrumb-section";
import ServiceSection from "../Home/Service-section";
import Newsletter from "../Home/Newsletter-section";

function Service() {
  return (
    <Layout>
      {/* Breadcrumb-section */}
      <Breadcrumb />
      <ServiceSection />
      <Newsletter />
    </Layout>
  );
}
export default Service;
