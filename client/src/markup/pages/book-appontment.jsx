import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../utilities/api.js";
import "../../stylesheets/service-providers.css";
import Toast from "../elements/toast.jsx";
import url from "../../utilities/global.env.js";

import Header from "../layout/header";
import Footer from "../layout/footer";

class BookAppontment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ServiceProvider: {},
      serviceProviderId: this.props.match.params.serviceProviderId,
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
    body.facilityDetails = this.state.ServiceProvider;
    body.userDetails = JSON.parse(
      localStorage.getItem("healthcareZoneUserDetails")
    );
    console.log(body);
    axios
      .post("/facility/bookAppointment", body)
      .then((res) => {
        window.scrollTo(0, 0);
        this.setState((prevState) => ({
          toastMessage: res.data,
          showToast: true,
          toastVariant: "success",
        }));
        setTimeout(() => {
          window.location.href = `${url.baseURL}`;
        }, 6000);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    // This code will run after the component has mounted
    // You can perform side effects here
    axios
      .get(
        `/facility/getById?facilityId=${this.state.serviceProviderId}`
      )
      .then((res) => {
        console.log(res);
        this.setState({ ServiceProvider: res.data.facilityDetails });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <Header />
        <Toast
          variant={this.state.toastVariant}
          showToast={this.state.showToast}
          message={this.state.toastMessage}
        />

        <div className="container">
          <div className="row align-items-center justify-content-center my-60">
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="appointment-form form-wraper">
                <h3 className="title">Book Appointment</h3>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="">Hospital Name</label>
                    <input
                      name="HospitalName"
                      type="text"
                      className="form-control"
                      value={this.state.ServiceProvider.name}
                      disabled={true}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Choose your doctor</label>
                    <select
                      name="DoctorName"
                      required
                      className="form-select form-control"
                    >
                      <option selected>Select Doctor</option>
                      <option value="Dr. Rahul Bhat">Dr. Rahul Bhat</option>
                      <option value="Dr. Mukesh Agrawal">
                        Dr. Mukesh Agrawal
                      </option>
                      <option value="Dr. Vikas Gupta">Dr. Vikas Gupta</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Select Appointment Date</label>
                    <input
                      name="AppointmentDate"
                      required
                      type="date"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Select Appointment Time</label>
                    <input
                      name="AppointmentTime"
                      required
                      type="time"
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-secondary btn-lg">
                    Appointment Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default BookAppontment;
