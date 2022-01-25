import React from "react";
import { Container, Row } from "reactstrap";
import AdminHeader from "../headers/AdminHeader";
import { isAuth, isAdmin, isUser } from "../../helpers/auth";
import { Navigate } from "react-router-dom";

const Admin = () => {
  if (isAuth() && isAdmin()) {
    return (
      <Container fluid>
        <AdminHeader />
        <Row>
          <h2>Logged in successfully!</h2>
          <p>This is admin dashboard.</p>
        </Row>
      </Container>
    );
  } else if (isAuth() && isUser()) {
    return <Navigate to="/user" />;
  } else {
    return <Navigate to="/" />;
  }
};

export default Admin;
