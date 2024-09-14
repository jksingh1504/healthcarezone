import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Import Images
import servicesPic1 from "../../images/services/pic1.jpg";
import pdf from "../../images/icon/pdf.png";
import doc from "../../images/icon/doc.png";
import axios from "../../utilities/api.js";

class ServiceDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Services: [],
      faqs: [
        {
          question: "What is Health Care Zone?",
          answer: "Health Care Zone is an online and offline interconnected platform that provides all health services on a single click at your doorstep in a feasible language. It offers a wide range of services including hospital, medical, laboratory, blood bank, ambulance service, milk bank, organ donation camp, health care camp, counseling, and various health schemes."
        },
        {
          question: "What services does Health Care Zone offer?",
          answer: "Health Care Zone offers a comprehensive range of health services including: hospital services, medical consultations, laboratory tests, blood bank access, ambulance services, milk bank facilities, organ donation camps, health care camps, counseling services, and information on various government, non-government, and private health schemes."
        },
        {
          question: "How does Health Care Zone remind me of my appointments?",
          answer: "Health Care Zone has a built-in reminder system for appointments. You'll receive notifications to help you keep track of your scheduled medical visits, ensuring you never miss an important health check-up."
        },
        {
          question: "Is Health Care Zone available in multiple languages?",
          answer: "Yes, Health Care Zone offers a multilingual network. This feature ensures that users can access health information and services in their preferred language, making healthcare more accessible and understandable for a diverse population."
        },
        {
          question: "How does Health Care Zone help with routine check-ups?",
          answer: "Health Care Zone provides reminders for routine check-ups. The platform keeps track of your health history and sends timely notifications when it's time for your regular health screenings or follow-ups."
        },
        {
          question: "Can I get information about health camps and vaccination drives through Health Care Zone?",
          answer: "Absolutely! Health Care Zone provides announcements about vaccination drives and health camps. You'll receive timely updates about these important health initiatives in your area."
        },
        {
          question: "What makes Health Care Zone user-friendly?",
          answer: "Health Care Zone is designed with user-friendliness in mind. It offers all healthcare services on a single click, provides detailed counseling, supports multiple languages, and includes helpful features like appointment reminders and health camp announcements."
        },
        {
          question: "How can I access counseling services through Health Care Zone?",
          answer: "Health Care Zone offers detailed counseling services as part of its platform. You can easily schedule and access counseling sessions through the app or website, connecting you with healthcare professionals for guidance and support."
        }
      ]
    };
  }

  componentDidMount() {
    axios
      .get(
        `/category/getByServiceRef?serviceRef=${this.props.match.params.categoryRef}`
      )
      .then((res) => {
        console.log(res, this.props.match.params.categoryRef);
        this.setState({ Services: res.data.categoryByServiceRef });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <Header />

        <div className="page-content bg-white">
          <section className="section-area section-sp1">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mb-30">
                  <div className="ttr-media mb-30">
                    <img src={servicesPic1} className="rounded" alt="" />
                  </div>
                  <div className="clearfix">
                    <div className="head-text mb-30">
                      <h2 className="title mb-15">
                        Why Medical Had Been So Popular Till
                      </h2>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book
                      </p>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-6 mb-30">
                        <ul className="list-check-squer mb-0">
                          <li>Then along come two they</li>
                          <li>That’s just a little bit more than</li>
                          <li>Standard dummy text ever since</li>
                          <li>Simply dummy text of the printing</li>
                          <li>Make a type specimen book</li>
                        </ul>
                      </div>
                      <div className="col-md-6 mb-30">
                        <div className="skillbar-box mb-30">
                          <h6 className="title">Advanced Technology</h6>
                          <div className="skillbar appear">
                            <p
                              className="skillbar-bar"
                              style={{ width: "96%" }}
                            ></p>
                            <span className="skill-bar-percent">96%</span>
                          </div>
                        </div>
                        <div className="skillbar-box mb-30">
                          <h6 className="title">Certified Engineers</h6>
                          <div className="skillbar appear">
                            <p
                              className="skillbar-bar"
                              style={{ width: "79%" }}
                            ></p>
                            <span className="skill-bar-percent">79%</span>
                          </div>
                        </div>
                        <div className="skillbar-box mb-0">
                          <h6 className="title">6 years Experience</h6>
                          <div className="skillbar appear">
                            <p
                              className="skillbar-bar"
                              style={{ width: "75%" }}
                            ></p>
                            <span className="skill-bar-percent">75%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix">
                    <div className="head-text mb-30">
                      <h4 className="title mb-10">Popular Questions</h4>
                      <p className="mb-0">
                        Standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book
                      </p>
                    </div>
                    <Accordion
                      defaultActiveKey="0"
                      className="accordion ttr-accordion1"
                    >
                      {this.state.faqs.map((faq, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>
                          <Accordion.Header>{faq.question}</Accordion.Header>
                          <Accordion.Body>
                            <p className="mb-0">{faq.answer}</p>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </div>
                </div>
                <div className="col-lg-4">
                  <aside className="sticky-top pb-1">
                    <div className="widget">
                      <ul className="service-menu">
                        {this.state.Services.map((ele) => (
                          <li key={ele._id}>
                            <Link to={`/serviceProviders/${ele._id}`}>
                              <span>{ele.categoryName}</span>
                              <i className="fa fa-angle-right"></i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="widget">
                      <div className="brochure-bx">
                        <h5 className="title-head">Download</h5>
                        <Link to="#" className="download-link">
                          <img src={pdf} alt="" />
                          <h5 className="title">Download our Brochures</h5>
                          <span>Download</span>
                        </Link>
                        <Link to="#" className="download-link">
                          <img src={doc} alt="" />
                          <h5 className="title">Our Company Details</h5>
                          <span>Download</span>
                        </Link>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </>
    );
  }
}

export default ServiceDetail;
