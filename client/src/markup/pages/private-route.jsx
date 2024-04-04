import React from "react";
import { Route, Redirect } from "react-router-dom";
import Toast from "../elements/toast";

const PrivateRoute = ({
  component: Component,...rest}) => {
  const isAuthenticated = localStorage.getItem("healthcareZoneToken");
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          // Redirect to the login page if the user is not authenticated
            <Redirect to="/login?prompt=true" />
        )
      }
    />
  );
};

export default PrivateRoute;
