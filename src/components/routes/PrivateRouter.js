import React from "react";
import { Route } from "react-router-dom";
import { isAuth, isAdmin } from "../../helpers/auth";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth() && isAdmin() ? <Component {...props} /> : <Navigate to="/" />
      }
    />
  );
};

export default PrivateRouter;
