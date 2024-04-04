import React, { Component } from "react";
import axios from "../../../utilities/api.js";
// Layout
import Header from "../../layout/header";
import Footer from "../../layout/footer";
// Import Images
import bnrImg1 from "../../../images/banner/img1.jpg";
import waveBlue from "../../../images/shap/wave-blue.png";
import circleDots from "../../../images/shap/circle-dots.png";
import plusBlue from "../../../images/shap/plus-blue.png";
import Toast from "../../elements/toast.jsx";

class AddServiceProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toastMessage: "",
      showToast: false,
      toastVariant: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target.elements;
    const body = {};
    body.serviceRef = this.props.match.params.categoryRef;
    body.categoryRef = this.props.match.params.serviceRef;
    for (let i = 0; i < data.length - 1; i++) {
      body[data[i].name] = data[i].value;
      data[i].value = "";
    }
    axios
      .post("/facility/addFacility", body)
      .then((res) => {
        this.setState((prevState) => ({
          toastMessage: `${res.data.name} has been added as new serice provider.`,
          showToast: true,
          toastVariant: "success",
        }));
        setTimeout(() => {
          this.setState((prevState) => ({
            showToast: false,
          }));
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <Header />
        <Toast
          variant={this.state.toastVariant}
          showToast={this.state.showToast}
          message={this.state.toastMessage}
        />
        <div className="page-content bg-white">
          <div className="banner-wraper">
            <div
              className="page-banner"
              style={{ backgroundImage: "url(" + bnrImg1 + ")" }}
            >
              <section className="section-area section-sp2 appointment-wraper">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-6 col-md-6">
                      <div className="appointment-form form-wraper">
                        <h3 className="title">Add new service provider</h3>
                        <form onSubmit={this.handleSubmit}>
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter service providers name"
                              name="name"
                            />
                          </div>
                          <div className="form-group">
                            <label>Short description</label>
                            <textarea
                              type="text"
                              className="form-control"
                              placeholder="Write short description about service provider"
                              name="shortDesc"
                            />
                          </div>
                          <div className="form-group">
                            <label>Email</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter service provider's email"
                              name="email"
                            />
                          </div>
                          <div className="form-group">
                            <label>Contact</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Enter service provider's contact"
                              name="contact"
                            />
                          </div>
                          <div className="form-group">
                            <label>Address</label>
                            <textarea
                              type="text"
                              className="form-control"
                              placeholder="Enter address of service provider"
                              name="address"
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-secondary btn-lg"
                          >
                            Submit
                          </button>
                        </form>
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
export default AddServiceProvider;
