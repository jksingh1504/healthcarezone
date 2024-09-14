import React, { Component } from "react";
import { Link } from "react-router-dom";

// Import Images
import logo from "../../images/logo-light.webp";

class FormLogin extends Component {
  render() {
    return (
      <>
        <div className="section-area account-wraper2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="appointment-form form-wraper">
                  <div className="logo">
                    <img src={logo} alt="" />
                  </div>
                  <form action="#">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <Link
                        to="/"
                        type="button"
                        className="btn btn-primary w-100 radius-xl"
                      >
                        Register Now
                      </Link>
                    </div>
                    <div className="text-center mt-40">
                      <p className="mt-0">Already have an account?</p>
                      <Link
                        className="btn btn-lg btn-secondary w-100"
                        data-toggle="tab"
                        to="/login"
                      >
                        Login
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FormLogin;
