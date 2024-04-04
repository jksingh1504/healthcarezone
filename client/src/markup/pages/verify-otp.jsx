import React, { Component } from "react";
import axios from "../../utilities/api.js";
import url from "../../utilities/global.env.js";

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import "../../stylesheets/verify-otp.css";
import Toast from "../elements/toast.jsx";

class Booking extends Component {
  constructor(props) {
    super(props);
    function handleChange(e, ele, indx, state) {
      const otpInputs = document.getElementsByClassName("otpInput");
      if (indx < 5 && !isNaN(e.key)) {
        e.target.value = e.key;
        otpInputs[indx + 1].focus();
        state.otp[indx] = e.target.value;
      } else if (e.key === "Backspace" && indx > 0) {
        otpInputs[indx - 1].focus();
        state.otp[indx] = e.target.value;
      } else if (isNaN(e.key)) {
        e.target.value = "";
      } else {
        state.otp[indx] = e.target.value;
      }
    }
    this.state = {
      inputRef: new Array(6)
        .fill(null)
        .map((ele, indx) => (
          <input
            className="otpInput"
            maxLength={1}
            onKeyUp={(e) => handleChange(e, ele, indx, this.state)}
            type="text"
          />
        )),
      otp: [],
      showPasswordComponent: false,
      toastMessage: "",
      showToast: false,
      toastVariant: "",
    };
  }
  handleOTP = () => {
    const otp = this.state.otp.join("");
    if (otp.length !== 6 || isNaN(otp)) {
      this.setState((prevState) => ({
        toastMessage: "Please Enter valid OTP",
        showToast: true,
        toastVariant: "danger",
      }));
      setTimeout(() => {
        this.setState((prevState) => ({
          showToast: false,
        }));
      }, 3000);
      return;
    }
    localStorage.setItem("healthcareZoneOTP", otp);
    this.setState((prevState) => ({
      showPasswordComponent: true,
    }));
    // axios.post("/user/register",body)
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target.elements;
    const body = {};
    for (let i = 0; i < data.length - 1; i++) {
      body[data[i].name] = data[i].value;
      // data[i].value = "";
    }
    if (body.password !== body.confirmPassword) {
      this.setState((prevState) => ({
        toastMessage: "Password and confirm password field did not match!",
        showToast: true,
        toastVariant: "danger",
      }));
      setTimeout(() => {
        window.location.href = `${url.baseURL}`;
      }, 4000);
      return;
    }
    delete body.confirmPassword;
    body.otp = localStorage.getItem("healthcareZoneOTP");
    axios
      .post("/user/auth/register", body)
      .then((res) => {
        const { token, newUser } = res.data;
        localStorage.setItem("healthcareZoneToken", token);
        localStorage.setItem(
          "healthcareZoneUserDetails",
          JSON.stringify(newUser)
        );
        this.setState((prevState) => ({
          toastMessage:
            "Your sign-up request has been successful now you can access our servieces, Thank you!",
          showToast: true,
          toastVariant: "success",
        }));
        setTimeout(() => {
          window.location.href = `${url.baseURL}`;
        }, 4000);
      })
      .catch((err) => {
        this.setState((prevState) => ({
          toastMessage:
            err.response.data.message === "Incorrect or Expired otp!"
              ? "Your request has been timed-out please try signing-up again"
              : err.response.data.message,
          showToast: true,
          toastVariant: "danger",
        }));
        setTimeout(() => {
          if (err.response.data.message === "Incorrect or Expired otp!") {
            window.location.href = `${url.baseURL}/sign-up`;
          }
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
                      {this.state.showPasswordComponent ? (
                        <div className="appointment-form form-wraper">
                          <h3 className="title">Setup your password</h3>
                          <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                              <input
                                type="password"
                                name="password"
                                required
                                className="form-control"
                                placeholder="Please enter a password"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                name="confirmPassword"
                                required
                                className="form-control"
                                placeholder="Please confirm your password"
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
                      ) : (
                        <div className="appointment-form form-wraper">
                          <h3 className="title">OTP Verification</h3>
                          <div className="otp-container">
                            {this.state.inputRef}
                          </div>
                          <br />
                          <button
                            onClick={this.handleOTP}
                            className="btn btn-secondary btn-lg"
                          >
                            Submit
                          </button>
                        </div>
                      )}
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
