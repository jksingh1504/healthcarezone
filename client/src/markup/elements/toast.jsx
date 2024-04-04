import React, { Component } from "react";

class Toast extends Component {
  render() {
    return (
      <div
        className={this.props.showToast?"Toast showToast":"Toast"}
        style={{
          "--variant": this.props.variant === "success" ? "#d6efdd" : "#f9dadd",
        }}
      >
        <b>{this.props.variant==="success"?"Request Successfull":"Request failed"}</b>
        <hr />
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Toast;
