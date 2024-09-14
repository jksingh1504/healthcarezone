import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import LatestNewsSection from "../elements/latest-news-slider";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";

class Faq extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page-content bg-white">
          <div className="banner-wraper">
            <div
              className="page-banner"
              style={{ backgroundImage: "url(" + bnrImg1 + ")" }}
            >
              <div className="container">
                <div className="page-banner-entry text-center">
                  <h1>Faq's</h1>
                  <nav aria-label="breadcrumb" className="breadcrumb-row">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-home"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>{" "}
                          Home
                        </Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Faq's
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
              <img className="pt-img2 animate2" src={circleDots} alt="" />
              <img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
            </div>
          </div>
          

          <section className="section-sp3">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <Accordion
                    defaultActiveKey="0"
                    className="accordion ttr-accordion1"
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                      What is Health Care Zone?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
                        "Health Care Zone is an online and offline interconnected platform that provides all health services on a single click at your doorstep in a feasible language. It offers a wide range of services including hospital, medical, laboratory, blood bank, ambulance service, milk bank, organ donation camp, health care camp, counseling, and various health schemes."
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                      What services does Health Care Zone offer?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
                        Health Care Zone offers a comprehensive range of health services including: hospital services, medical consultations, laboratory tests, blood bank access, ambulance services, milk bank facilities, organ donation camps, health care camps, counseling services, and information on various government, non-government, and private health schemes.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                      How does Health Care Zone remind me of my appointments?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
                        Health Care Zone has a built-in reminder system for appointments. You'll receive notifications to help you keep track of your scheduled medical visits, ensuring you never miss an important health check-up.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                      Is Health Care Zone available in multiple languages?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
                        Yes, Health Care Zone offers a multilingual network. This feature ensures that users can access health information and services in their preferred language, making healthcare more accessible and understandable for a diverse population.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                      How does Health Care Zone help with routine check-ups?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
                        Health Care Zone provides reminders for routine check-ups. The platform keeps track of your health history and sends timely notifications when it's time for your regular health screenings or follow-ups.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                      Can I get information about health camps and vaccination drives through Health Care Zone?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
                        Absolutely! Health Care Zone provides announcements about vaccination drives and health camps. You'll receive timely updates about these important health initiatives in your area.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="col-lg-6">
                  <Accordion
                    defaultActiveKey="2"
                    className="accordion ttr-accordion1"
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                      What makes Health Care Zone user-friendly?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
                        Health Care Zone is designed with user-friendliness in mind. It offers all healthcare services on a single click, provides detailed counseling, supports multiple languages, and includes helpful features like appointment reminders and health camp announcements.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                      How can I access counseling services through Health Care Zone?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
                        Health Care Zone offers detailed counseling services as part of its platform. You can easily schedule and access counseling sessions through the app or website, connecting you with healthcare professionals for guidance and support.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        How Can I Contact You?
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    
                  </Accordion>
                </div>
              </div>
            </div>
          </section>

          <LatestNewsSection />
        </div>

        <Footer />
      </>
    );
  }
}

export default Faq;
