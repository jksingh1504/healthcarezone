import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../utilities/api.js";
import url from "../../utilities/global.env.js";

// Import Images
import logo from "../../images/logo-light.webp";

// Layout
import Header from "../layout/header.jsx";
import Footer from "../layout/footer.jsx";
import Toast from "../elements/toast.jsx";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toastMessage: "",
      showToast: false,
      toastVariant: "",
    };
  }
  componentDidMount() {
    const prompt = new URLSearchParams(this.props.location.search).get('prompt');
    if (prompt) {
      this.setState((prevState) => ({
        toastMessage: "You need to login first before using our serivces, thank you!",
        showToast: true,
        toastVariant: "danger",
      }));
      setTimeout(() => {
        this.setState((prevState) => ({
          showToast: false,
        }));
      }, 3500);
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target.elements;
    const body = {};
    for (let i = 0; i < data.length - 1; i++) {
      body[data[i].name] = data[i].value;
      // data[i].value = "";
    }
    axios
      .post("/user/auth/login", body)
      .then((res) => {
        const { token, registeredUser } = res.data;
        localStorage.setItem("healthcareZoneToken", token);
        localStorage.setItem(
          "healthcareZoneUserDetails",
          JSON.stringify(registeredUser)
        );
        this.setState((prevState) => ({
          toastMessage: "You have been successfully logged-in !",
          showToast: true,
          toastVariant: "success",
        }));
        setTimeout(() => {
          window.location.href = `${url.baseURL}`;
        }, 2000);
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
                        <div className="logo">
                          <img src={logo} alt="" />
                        </div>
                        <br />
                        <form onSubmit={this.handleSubmit}>
                          <div className="form-group">
                            <input
                              type="text"
                              name="email_contact"
                              required
                              className="form-control"
                              placeholder="Please enter your email/contact"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              name="password"
                              required
                              className="form-control"
                              placeholder="Please enter your password"
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn mb-30 btn-lg btn-primary w-100"
                          >
                            login
                          </button>
                        </form>
                        <Link to="/form-forget-password" data-toggle="tab">
                          Forgot Password
                        </Link>
                        <br />
                        <div className="text-center mt-40">
                          <p className="mt-0">Dont have any account?</p>
                          <Link
                            className="btn btn-lg btn-secondary w-100"
                            data-toggle="tab"
                            to="/sign-up"
                          >
                            Sign-up
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
      //   <>
      //   	<div className="section-area account-wraper2">
      //   		<div className="container">
      //   			<div className="row justify-content-center">
      //   				<div className="col-xl-5 col-lg-6 col-md-8">
      //   					<div className="appointment-form form-wraper">
      //   						<div className="logo">
      //   							<img src={logo} alt=""/>
      //   						</div>
      //   						<form action="#">
      //   							<div className="form-group">
      //   								<input type="text" className="form-control" placeholder="Username"/>
      //   							</div>
      //   							<div className="form-group">
      //   								<input type="password" className="form-control" placeholder="Password"/>
      //   							</div>
      //   							<div className="form-group">
      //   								<Link to="/" type="button" className="btn mb-30 btn-lg btn-primary w-100">login</Link>
      //   								<Link to="/form-forget-password" data-toggle="tab">Forgot Password</Link>
      //   							</div>
      //   							<div className="text-center mt-40">
      //   								<p className="mt-0">Dont have any account?</p>
      //   								<Link className="btn btn-lg btn-secondary w-100" data-toggle="tab" to="/sign-up">Sign-up</Link>
      //   							</div>
      //   						</form>
      //   					</div>
      //   				</div>
      //   			</div>
      //   		</div>
      //   	</div>

      //   </>
    );
  }
}

export default FormLogin;
