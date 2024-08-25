import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Projects from "./pages/Project/Projects";
import Feature from "./pages/Feature/Features";
import Team from "./pages/Team/Team";
import OurFaqs from "./pages/Faq/Faqs";
import Testimonial from "./pages/Testimonial/Testimonial";
import Error from "./pages/404Page/404Error";
import Contact from "./pages/Contact/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faqs" element={<OurFaqs />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
