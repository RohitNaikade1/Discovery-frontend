import React from "react";
import UserHeader from "../headers/UserHeader";
import Profile from "./Profile";
import { Container } from "reactstrap";
const UserProfile = () => {
  return (
    <Container fluid>
      <UserHeader />
      <Profile />
    </Container>
  );
};

export default UserProfile;
