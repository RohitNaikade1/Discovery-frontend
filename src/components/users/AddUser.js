import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
} from "reactstrap";
import AdminHeader from "../headers/AdminHeader";
import axiosInstance from "../../helpers/axios";
import { isAuth, isAdmin, isUser } from "../../helpers/auth";
import { Navigate } from "react-router-dom";
import History from "../../helpers/helpers";
const AddUser = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLasName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handle = () => {
    const data = {
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      email: email,
      role: role,
    };
    var token = localStorage.getItem("token");
    console.log(data);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axiosInstance
      .post("servicediscovery/addusers", data, config)
      .then((res) => {
        console.log(res);
        History.push("/adduser");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isAuth() && isAdmin()) {
    return (
      <Container fluid>
        <AdminHeader />
        <Row>
          <h2 className="mt-2">Add New User</h2>
        </Row>
        <Row className="align-items-center mt-4">
          <Col className="col-md-4 col-sm-4"></Col>
          <Col className="col-md-4 col-sm-4">
            <Form inline className="">
              <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label className="ml-0" for="firstname">
                  First Name
                </Label>
                <Input
                  name="firstname"
                  placeholder="First Name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  type="text"
                />
              </FormGroup>
              <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label className="ml-0" for="lastname">
                  Last Name
                </Label>
                <Input
                  name="lastname"
                  placeholder="Last Name"
                  onChange={(e) => {
                    setLasName(e.target.value);
                  }}
                  type="text"
                />
              </FormGroup>
              <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label className="ml-0" for="exampleEmail">
                  Username
                </Label>
                <Input
                  name="Username"
                  placeholder="Username"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  type="text"
                />
              </FormGroup>
              <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label className="ml-0" for="examplePassword">
                  Password
                </Label>
                <Input
                  name="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                />
              </FormGroup>
              <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label className="ml-0" for="email">
                  Email
                </Label>
                <Input
                  name="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                />
              </FormGroup>
              <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label className="ml-0" for="role">
                  Role
                </Label>
                <Input
                  name="role"
                  placeholder="Role"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  type="text"
                />
              </FormGroup>
              <Button onClick={handle} className="mt-3 btn-secondary btn-lg">
                Add
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  } else if (isAuth() && isUser()) {
    return <Navigate to="/user" />;
  } else {
    return <Navigate to="/" />;
  }
};

export default AddUser;
