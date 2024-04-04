import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../../utilities/api.js";

// Layout
import Header from "../../layout/header.jsx";
import Footer from "../../layout/footer.jsx";
// Import Images
import bnrImg1 from "../../../images/banner/img1.jpg";
import waveBlue from "../../../images/shap/wave-blue.png";
import circleDots from "../../../images/shap/circle-dots.png";
import plusBlue from "../../../images/shap/plus-blue.png";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allServices: [],
    };
    axios
      .get("/service/getServices")
      .then((res) => {
        this.setState((prev) => ({
          allServices: res.data.allServices,
        }));
      })
      .catch((err) => console.log(err));
  }
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
              <section className="section-area section-sp2 appointment-wraper">
                <div className="container">
                  <div className="row">
                    {this.state.allServices.map((ele) => (
                      <div key={ele._id} className="col-lg-4 col-md-6 mb-30">
                        <div className="feature-container feature-bx2 feature1">
                          <div className="icon-content">
                            <h3 className="ttr-title">{ele.serviceName}</h3>
                            <p className="line-clamp">{ele.shortDesc}</p>
                            <Link
                              to={`/admin/add-service/${ele._id}`}
                              className="btn btn-primary light"
                            >
                              Add new service
                            </Link>
                            <br />
                            <Link
                              to={`/admin/all-services/${ele._id}`}
                              className="btn btn-primary light"
                            >
                              Add new service provider
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="col-lg-4 col-md-6 mb-30">
                      <div className="feature-container feature-bx2 feature2">
                        <div className="icon-content">
                          <h3 className="ttr-title">Add new category</h3>
                          <p>
                            Here you can add different categories like Healthcare, Emergancy, Labs etc.
                          </p>
                          <Link
                            to="/admin/add-city"
                            className="btn btn-primary light"
                          >
                            Add new category
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                      <div className="feature-container feature-bx2 feature2">
                        <div className="icon-content">
                          <h3 className="ttr-title">Onboard new city</h3>
                          <p>
                            Here you can onboard new cities in which your services are being provided.
                          </p>
                          <Link
                            to="/admin/add-city"
                            className="btn btn-primary light"
                          >
                            Add new city
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
              <img className="pt-img2 animate2" src={circleDots} alt="" />
              <img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Admin;
