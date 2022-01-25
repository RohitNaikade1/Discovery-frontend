import React, { useState } from "react";
import { Row, Col, Navbar, NavbarBrand, Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
//import {LocalForm,Control,Errors} from "react-redux-form";
import axiosInstance from "../../helpers/axios";
import jwt_decode from "jwt-decode";
import { Navigate } from 'react-router-dom'
import History from "../../helpers/helpers";
import { isAuth, isAdmin, isUser } from '../../helpers/auth';

const Login = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleData = () => {

        const data = {
            username: username,
            password: password
        }
        console.log(data)
        axiosInstance.post('servicediscovery/login', data)
            .then(res => {
                console.log(res.data.token)
                console.log("Log in Successful")
                var token = res.data.token;
                var decoded = jwt_decode(token);
                console.log(decoded);
                localStorage.setItem("token", token);
                console.log(decoded.role)
                let role = decoded.role

                if (role == "admin") {
                    History.push('/admin')
                    window.location.reload();

                } else {
                    History.push('/user')
                    window.location.reload();
                }
            })
            .catch(err => {
                console.log(err)
                console.log("Incorrect password")
            })

    }

    if (!isAuth()) {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Navbar
                            color="dark"
                            expand="md"
                            dark
                        >
                            <NavbarBrand href="/">
                                Custom-Discovery
                            </NavbarBrand>
                        </Navbar>
                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <h2 className="mt-2">Login</h2>
                    </Row>
                    <Row className="align-items-center mt-4">
                        <Col className="col-md-4 col-sm-4"></Col>
                        <Col className="col-md-4 col-sm-4">
                            <Form inline className="">
                                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                    <Label
                                        className="ml-0"
                                        for="username"
                                    >
                                        Username
                                    </Label>
                                    <Input
                                        name="username"
                                        placeholder="Username"
                                        type="text"
                                        onChange={(e) => { setUserName(e.target.value) }}
                                    />
                                </FormGroup>
                                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                    <Label
                                        className="ml-0"
                                        for="examplePassword"
                                    >
                                        Password
                                    </Label>
                                    <Input
                                        name="password"
                                        placeholder="Password"
                                        type="password"
                                        onChange={(e) => { setPassword(e.target.value) }}
                                    />
                                </FormGroup>
                                <Button className="mt-3 btn-secondary btn-lg" onClick={handleData}>
                                    login
                                </Button>
                            </Form>
                        </Col>

                    </Row>
                </Container>

            </div>
        )
    }else if(isAuth() && isAdmin()){
        return <Navigate to="/admin" />
    }else{
        return <Navigate to="/user" />
    }

}

export default Login;