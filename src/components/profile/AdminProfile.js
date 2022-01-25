import React from "react";
import AdminHeader from "../headers/AdminHeader";
import Profile from "./Profile";
import { Container } from "reactstrap";
const UserProfile = () => {
  return (
    <Container fluid>
      <AdminHeader />
      <Profile />
    </Container>
  );
};

export default UserProfile;
