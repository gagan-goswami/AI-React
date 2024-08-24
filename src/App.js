import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Projects from "./pages/Project/Projects.js";
import Feature from "./pages/Feature/Features.js";
import $ from "jquery";
import Team from "./pages/Team/Team.js";
import OurFaqs from "./pages/Faq/Faqs.js";
import Testimonial from "./pages/Testimonial/Testimonial.js";
import Error from "./pages/404Page/404Error.js";
import Contact from "./pages/Contact/ContactUs.js";
window.$ = window.jQuery = $;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Features" element={<Feature />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Faqs" element={<OurFaqs />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/404Error" element={<Error />} />
        <Route path="/ContactUs" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
