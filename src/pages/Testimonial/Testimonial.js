import React from "react";
import Layout from "../../components/Layout/Layout";
import "../../styles/HomeStyle.css";
import Breadcrumb from "../Testimonial/Breadcrumb-section";
import Testimonial from "../Home/Testimonial-section";
import Newsletter from "../Home/Newsletter-section";

function OurTestimonial() {
  return (
    <Layout>
      {/* Breadcrumb-section */}
      <Breadcrumb />
      <Testimonial />
      <Newsletter />
    </Layout>
  );
}

export default OurTestimonial;
