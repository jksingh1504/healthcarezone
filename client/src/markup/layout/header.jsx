import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sticky from "react-stickynode";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { withRouter } from "react-router-dom";
import Toast from "../elements/toast.jsx";

// Images
import logo from "../../images/logo-light.webp";
import logoWhite from "../../images/logo-light.webp";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_user_loggedin: localStorage.getItem("healthcareZoneToken")
        ? true
        : false,
      isModalOpen: false,
      toastMessage: "",
      showToast: false,
      toastVariant: "",
      style: {
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        borderRadius: "10px",
        boxShadow: 24,
        p: 4,
      },
      userDetails:
        JSON.parse(localStorage.getItem("healthcareZoneUserDetails")) || {},
    };
  }
  handleModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };
  handleLogout = () => {
    this.handleModal();
    this.setState((prevState) => ({
      toastMessage: "You have been successfully logged out off your account",
      showToast: true,
      toastVariant: "success",
      is_user_loggedin: false,
    }));
    localStorage.clear();
    setTimeout(() => {
      this.setState((prevState) => ({
        showToast: false,
      }));
      this.props.history.push("/");
    }, 3000);
  };

  componentDidMount() {
    var searchForm = document.querySelector(".nav-search-bar");
    var closeBtn = document.getElementById("searchRemove");
    closeBtn.addEventListener("click", function () {
      searchForm.classList.remove("show");
    });
    // Mobile Menu Open
    var menuIcon = document.querySelector(".menuicon");
    var menuLinks = document.querySelector(".menu-links");
    var menuClose = document.getElementById("menuClose");

    menuIcon.addEventListener("click", function () {
      menuLinks.classList.add("show");
    });

    menuClose.addEventListener("click", function () {
      menuLinks.classList.remove("show");
    });

    // Mobile Submenu open close function
    var navMenu = [].slice.call(
      document.querySelectorAll(".menu-links > ul > li")
    );
    for (var y = 0; y < navMenu.length; y++) {
      navMenu[y].addEventListener("click", function () {
        menuClick(this);
      });
    }

    function menuClick(current) {
      const active = current.classList.contains("open");
      navMenu.forEach((el) => el.classList.remove("open"));

      if (active) {
        current.classList.remove("open");
        console.log("active");
      } else {
        current.classList.add("open");
        console.log("close");
      }
    }
  }

  render() {
    return (
      <>
        <Toast
          variant={this.state.toastVariant}
          showToast={this.state.showToast}
          message={this.state.toastMessage}
        />
        <Modal
          open={this.state.isModalOpen}
          onClose={this.handleModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={this.state.style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              mb={2}
              component="h2"
            >
              Would you like to logout off your account.
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "20px",
              }}
            >
              <button
                onClick={this.handleLogout}
                type="button"
                class="btn btn-outline-success btn-sm"
              >
                Yes
              </button>
              <button
                onClick={this.handleModal}
                type="button"
                class="btn btn-outline-danger btn-sm"
              >
                No
              </button>
            </div>
          </Box>
        </Modal>
        <header className="header rs-nav">
          <Sticky enabled={true} className="sticky-header navbar-expand-lg">
            <div className="menu-bar clearfix">
              <div className="container-fluid clearfix">
                <div className="menu-logo logo-dark">
                  <Link
                    style={{
                      display: "inline-flex",
                      position: "relative",
                      top: "-6px",
                    }}
                    to="/"
                  >
                    <img style={{ width: "40px" }} src={logo} alt="" />
                  </Link>
                  <div className="logo-text">
                    <Link to="/">Healthcare Zone</Link>
                  </div>
                </div>
                <button
                  className="navbar-toggler collapsed menuicon justify-content-end"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#menuDropdown"
                  aria-controls="menuDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <div className="secondary-menu">
                  <ul>
                    <li className="btn-area">
                      <Link to="/contact-us" className="btn btn-primary shadow">
                        CONTACT US{" "}
                        <i className="btn-icon-bx fas fa-chevron-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="menu-links navbar-collapse collapse justify-content-end"
                  id="menuDropdown"
                >
                  <div className="menu-logo">
                    <Link to="/">
                      <img src={logoWhite} alt="" />
                    </Link>
                  </div>
                  <ul className="nav navbar-nav">
                    {this.state.is_user_loggedin ? (
                      <li>
                        <span onClick={this.handleModal}>Logout</span>
                      </li>
                    ) : null}
                    <li>
                      <Link to="#">
                        Pages <i className="fas fa-plus"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li className="add-menu-left">
                          <ul>
                            <li>
                              <Link to="/about-us">
                                <span>About Us</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/team">
                                <span>Our Team</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/faq">
                                <span>FAQ's</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/booking">
                                <span>Booking</span>
                              </Link>
                            </li>
                            {this.state.is_user_loggedin ? null : (
                              <li>
                                <Link to="/login">
                                  <span>Login / Register</span>
                                </Link>
                              </li>
                            )}
                            {this.state.userDetails.userRole === "admin" ? (
                              <li>
                                <Link to="/admin">
                                  <span>Admin Dashboard</span>
                                </Link>
                              </li>
                            ) : null}
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#">
                        Services <i className="fas fa-plus"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li className="add-menu-left">
                          <ul>
                            <li>
                              <Link to="/services">
                                <span>Service</span>{" "}
                              </Link>
                            </li>
                            <li>
                              <Link to="/service-detail">
                                <span>Service Detail</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    {this.state.is_user_loggedin ? null : (
                      <li>
                        <Link to="/login">login/Sign-up</Link>
                      </li>
                    )}
                  </ul>
                  <ul className="social-media">
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/"
                        className="btn btn-primary"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.google.com/"
                        className="btn btn-primary"
                      >
                        <i className="fab fa-google"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/"
                        className="btn btn-primary"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/"
                        className="btn btn-primary"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="menu-close" id="menuClose">
                    <i className="ti-close"></i>
                  </div>
                </div>
              </div>
            </div>
          </Sticky>
          <div className="nav-search-bar">
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Type to search"
              />
              <span>
                <i className="ti-search"></i>
              </span>
            </form>
            <span id="searchRemove">
              <i className="ti-close"></i>
            </span>
          </div>
        </header>
      </>
    );
  }
}

export default withRouter(Header);
