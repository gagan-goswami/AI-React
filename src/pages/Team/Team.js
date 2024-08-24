import React from "react";
import Layout from "../../components/Layout/Layout";
import "../../styles/HomeStyle.css";
import Breadcrumb from "../Team/Breadcrumb-section";
import Team from "../Home/Team-section";
import Newsletter from "../Home/Newsletter-section";

function OurTeam() {
  return (
    <Layout>
      {/* Breadcrumb-section */}
      <Breadcrumb />
      <Team />
      <Newsletter />
    </Layout>
  );
}

export default OurTeam;
