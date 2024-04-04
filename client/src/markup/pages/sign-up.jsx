import React, { Component } from "react";
import axios from "../../utilities/api.js";
import url from "../../utilities/global.env.js";

// Layout
import Header from "../layout/header.jsx";
import Footer from "../layout/footer.jsx";
import Toast from "../elements/toast.jsx";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";

class Booking extends Component {
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
    }
    axios
      .post("/user/auth/verify", body)
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("healthcareZoneToken", token);
        this.setState((prevState) => ({
          toastMessage: "We have sent you an otp to your contact number!",
          showToast: true,
          toastVariant: "success",
        }));
        setTimeout(() => {
          window.location.href = `${url.baseURL}sign-up/verify`;
        }, 4000);
      })
      .catch((err) => {
        this.setState((prevState) => ({
          toastMessage: err.response.data.message,
          showToast: true,
          toastVariant: "danger",
        }));
        setTimeout(() => {
          this.setState((prevState) => ({
            showToast: false,
          }));
        }, 3000);
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
              {/* <div className="container">
								<div className="page-banner-entry text-center">
									<h1>Booking</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Booking</li>
									</ul>
                            </nav>
						</div>
			 </div> */}
              <section className="section-area section-sp2 appointment-wraper">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-6 col-md-6">
                      <div className="appointment-form form-wraper">
                        <h3 className="title">Sign-up</h3>
                        <form onSubmit={this.handleSubmit}>
                          <div className="form-group">
                            <input
                              type="text"
                              name="userName"
                              required
                              className="form-control"
                              placeholder="Please Enter Your Name"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              required
                              className="form-control"
                              placeholder="Please Enter Your Email"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="number"
                              name="contact"
                              required
                              className="form-control"
                              placeholder="Please Enter Your Contact"
                            />
                          </div>
                          <div className="form-group">
                            <select
                              name="cityRef"
                              className="form-select form-control"
                              required
                            >
                              <option value="">Please Select Your City</option>
                              <option value="648eae80edf39c5a4b26016f">
                                Pune
                              </option>
                              <option value="648eae8aedf39c5a4b260171">
                                Mumbai
                              </option>
                              {/* <option value="3">Three</option> */}
                            </select>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-secondary btn-lg"
                          >
                            Get OTP
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

export default Booking;
