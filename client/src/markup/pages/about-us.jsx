import React, { Component } from "react";
import { Link } from "react-router-dom";

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import AboutSection from "../elements/about";
import LatestNewsSection from "../elements/latest-news-slider";
import FeatureSection3 from "../elements/mission-vision";
import TeamSection from "../elements/team";
import TestimonialSection from "../elements/testimonial";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";

class AboutUs extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page-content bg-white">

          <AboutSection />

          <FeatureSection3 />

          <TeamSection />

          <TestimonialSection />

          <LatestNewsSection />
        </div>

        <Footer />
      </>
    );
  }
}

export default AboutUs;
