import React from "react";
import Layout from "../../components/Layout/Layout";
import "../../styles/HomeStyle.css";
import Breadcrumb from "../../pages/About/Breadcrumb-section";
import AboutSection from "../Home/About-section";
import WhyChooseUs from "../Home/why-choose-us";
import Team from "../Home/Team-section";
import Newsletter from "../Home/Newsletter-section";

function About() {
  return (
    <Layout>
      {/* Breadcrumb-section */}
      <Breadcrumb />
      <AboutSection />
      <WhyChooseUs />
      <Team />
      <Newsletter />
    </Layout>
  );
}

export default About;
