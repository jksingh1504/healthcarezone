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

class AddCities extends Component {
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
    for (let i = 0; i < data.length - 1; i++) {
      body[data[i].name] = data[i].value;
      data[i].value = "";
    }
    axios
      .post("/city/addCity", body)
      .then((res) => {
        this.setState((prevState) => ({
          toastMessage: `${res.data.name} has been added as new city in ${res.data.state} state`,
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
        if (err.response.data.message.includes("duplicate")) {
          this.setState((prevState) => ({
            toastMessage: `The city name you have entered already exists!`,
            showToast: true,
            toastVariant: "danger",
          }));
        }
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
                        <h3 className="title">Add new service</h3>
                        <form onSubmit={this.handleSubmit}>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter city name"
                              name="name"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter the state name"
                              name="state"
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

export default AddCities;
