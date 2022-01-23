import React, { useEffect, useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button, Container, TabPane } from 'reactstrap';
import AdminHeader from './AdminHeader';
import { isAuth, isAdmin, isUser } from '../helpers/auth';
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCred } from '../Redux/Actions/getCredentials';
import axiosInstance from "../helpers/axios";

const EditCredentials = () => {

    const params = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCred(params.id))
    }, [params]);

    const Record = useSelector((state) => state.usersList.credentials);
    console.log(Record)

    const handle = () => {
        const data = {
            firstname: Record.firstname,
            lastname: Record.lastname,
            username: Record.username,
            email: Record.email,
        }

        var token = localStorage.getItem("token")
        console.log(data)


        const config = {
            headers: {
                Authorization: `Bearer ${token}`

            }
        };
        axiosInstance.put(`servicediscovery/users/${params.id}`, data, config
        )
            .then(res => {
                console.log(res)
                History.push("/userlist")
                window.location.reload()

            })
            .catch(err => {
                console.log(err)
            })

    }

    if (isAuth() && isAdmin()) {
        return (
            <Container fluid>
                <AdminHeader />
                <Row>
                    <h2 className="mt-2">Edit User Details</h2>
                </Row>
                <Row className="align-items-center mt-4">
                    <Col className="col-md-4 col-sm-4"></Col>
                    <Col className="col-md-4 col-sm-4">
                    <Form   inline className="">
                            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                <Label
                                    className="ml-0"
                                    for="provider"
                                >
                                    Provider
                                </Label>
                                <Input
                                    name="provider"
                                    placeholder="provider"
                                    type="text"
                                    
                                />
                            </FormGroup>
                            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                <Label
                                    className="ml-0"
                                    for="username"
                                >
                                    Account Username
                                </Label>
                                <Input
                                    name="username"
                                    placeholder="username"
                                    type="text"
                                    
                                />
                            </FormGroup>
                            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                <Label
                                    className="ml-0"
                                    for="subscriptionid"
                                >
                                    Subscription ID
                                </Label>
                                <Input
                                    name="subscriptionid"
                                    placeholder="subscriptionid"
                                    type="text"
                                    
                                />
                            </FormGroup>
                            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                <Label
                                    className="ml-0"
                                    for="tenantid"
                                >
                                    Tenant ID
                                </Label>
                                <Input
                                    name="tenantid"
                                    placeholder="tenantid"
                                    type="text"
                                    
                                />
                            </FormGroup>
                            <Button className="mt-3 btn-secondary btn-lg">
                                Add
                            </Button>
                        </Form>
                    </Col>

                </Row>
            </Container >
        )
    } else if (isAuth() && isUser()) {
        return <Navigate to="/user" />
    } else {
        return <Navigate to="/" />
    }

}

export default EditCredentials;