import React from "react";
import Layout from "../../components/Layout/Layout";
import "../../styles/HomeStyle.css";
import Breadcrumb from "../../pages/Feature/Breadcrumb-section";
import WhyChooseUs from "../Home/why-choose-us";
import Newsletter from "../Home/Newsletter-section";

function About() {
  return (
    <Layout>
      {/* Breadcrumb-section */}
      <Breadcrumb />
      <WhyChooseUs />
      <Newsletter />
    </Layout>
  );
}

export default About;
