import React from "react";
import Layout from "../../components/Layout/Layout";
import "../../styles/HomeStyle.css";
import Breadcrumb from "../Faq/Breadcrumb-section";
import Faqs from "../Home/Faq-section";
import Newsletter from "../Home/Newsletter-section";

function OurFaqs() {
  return (
    <Layout>
      {/* Breadcrumb-section */}
      <Breadcrumb />
      <Faqs />
      <Newsletter />
    </Layout>
  );
}

export default OurFaqs;
