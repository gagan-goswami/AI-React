import React from "react";
import Layout from "../../components/Layout/Layout";
import "../../styles/HomeStyle.css";
import Hero from "./Hero-section";
import AboutSection from "./About-section";
import WhyChooseUs from "./why-choose-us";
import Casestudy from "./Casestudy-section";
import FaqSection from "./Faq-section";
import Team from "./Team-section";
import Testimonial from "./Testimonial-section";
import Newsletter from "./Newsletter-section";
import ServiceSection from "./Service-section";

function Home() {
  return (
    <>
      <Layout>
        {/* hero-section */}
        <Hero />

        {/* hero-section */}
        <AboutSection />

        {/* service-section */}
        <ServiceSection />

        {/* why-choose-us-section */}
        <WhyChooseUs />

        {/* caseStudy-section */}
        <Casestudy />

        {/* faq-section */}
        <FaqSection />

        {/* Team-section */}
        <Team />

        {/* Testimonial-section */}
        <Testimonial />

        {/* newsletter-section */}
        <Newsletter />
      </Layout>
    </>
  );
}

export default Home;
