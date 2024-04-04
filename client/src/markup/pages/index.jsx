import React, { Component } from "react";

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import MainBannerSection from "../elements/main-banner";
import AboutSection from "../elements/about";
import WorkSection from "../elements/work";
import TestimonialSection from "../elements/testimonial";
import ServicesSliderSection from "../elements/services-slider";

class Index extends Component {
  render() {
    return (
      <>
        <Header />

        <MainBannerSection />

        <AboutSection />

        <WorkSection />

        <ServicesSliderSection />

        <TestimonialSection />

        <Footer />
      </>
    );
  }
}

export default Index;
