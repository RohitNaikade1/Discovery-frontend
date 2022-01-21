import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Navbar, NavbarBrand, Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
//import {LocalForm,Control,Errors} from "react-redux-form";
import axiosInstance from "../helpers/axios";
import { Navigate, useLinkClickHandler } from 'react-router-dom';
import { getProfile } from '../Redux/Actions/getUsers';
import History from "../helpers/helpers";
import { isAuth, isAdmin, isUser } from '../helpers/auth';
import jwt_decode from "jwt-decode";

const Profile = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfile());
    }, [])

    const Record = useSelector((state) => state.usersList.profile.data);
    console.log(Record)

    const handle = () => {
        const data = {
            username: Record?.username,
            firstname: Record?.firstname,
            lastname: Record?.lastname,
            email: Record?.email,
            role:Record?.role,
            password:Record?.password
        }

        var token = localStorage.getItem("token")
        var decoded = jwt_decode(token);
        console.log(data,decoded)
       

        const config = {
            headers: {
                Authorization: `Bearer ${token}`

            }
        };
        axiosInstance.put(`servicediscovery/users/${decoded._id}`, data, config
        )
            .then(res => {
                console.log(res)
                // if (decoded.role == "admin") {
                //     History.push("/adminprofile")
                //     window.location.reload()
                // } else {
                //     History.push("/userprofile")
                //     window.location.reload()
                // }


            })
            .catch(err => {
                console.log(err)
            })

    }

    

    if (isAuth()) {
        return (
            <div>

                <Container fluid>
                    <Row>
                        <h2 className="mt-2">Profile</h2>
                    </Row>
                    <Row className="align-items-center mt-4">
                        <Col className="col-md-4 col-sm-4"></Col>
                        <Col className="col-md-4 col-sm-4">
                            <Form inline className="">
                                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                    <Label
                                        className="ml-0"
                                        for="firstname"
                                    >
                                        First Name
                                    </Label>
                                    <Input
                                        name="firstname"
                                        value={Record?.firstname}
                                        placeholder="First Name"
                                        type="text"
                                    />
                                </FormGroup>
                                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                    <Label
                                        className="ml-0"
                                        for="lastname"
                                    >
                                        Last Name
                                    </Label>
                                    <Input
                                        name="lastname"
                                        placeholder="Last Name"
                                        value={Record?.lastname}
                                        type="text"
                                    />
                                </FormGroup>
                                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                    <Label
                                        className="ml-0"
                                        for="exampleEmail"
                                    >
                                        Username
                                    </Label>
                                    <Input
                                        name="Username"
                                        value={Record?.username}
                                        placeholder="Username"
                                        type="text"
                                    />
                                </FormGroup>

                                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                    <Label
                                        className="ml-0"
                                        for="email"
                                    >
                                        Email
                                    </Label>
                                    <Input
                                        name="email"
                                        placeholder="Email"
                                        value={Record?.email}
                                        type="text"
                                    />
                                </FormGroup>
                                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                    <Label
                                        className="ml-0"
                                        for="role"
                                    >
                                        Role
                                    </Label>
                                    <Input
                                        name="role"
                                        value={Record?.role}
                                        placeholder="Role"
                                        type="text"
                                        disabled
                                    />
                                </FormGroup>
                                <Button onClick={handle} className="mt-3 btn-secondary btn-lg">
                                    Update
                                </Button>
                            </Form>
                        </Col>

                    </Row>
                </Container>

            </div>
        )
    } else if (isAuth() && isAdmin()) {
        return <Navigate to="/admin" />
    } else {
        return <Navigate to="/user" />
    }

}

export default Profile;