import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button, Container, Navbar, NavbarBrand } from 'reactstrap';
import axiosInstance from "../helpers/axios";
import AdminHeader from './AdminHeader';
import { Navigate } from "react-router-dom";
import History from "../helpers/helpers";

const AddCredentials = ()=>{

    const [provider, setProvider] = useState("");
    const [username, setUserName] = useState("");
    const [subscriptionid, setSubscriptionID] = useState("");
    const [tenantid, setTenantID] = useState("");

    const handle = ()=>{
        const data = {
            provider:provider,
            username: username,
            subscriptionid:subscriptionid,
            tenantid:tenantid
        }

        var token = localStorage.getItem("token")
        console.log(token)
        console.log(data)

        const config = {
            headers: {
                Authorization: `Bearer ${token}`

            }
        };
        axiosInstance.post('servicediscovery/credentials', data, config
        )
            .then(res => {
                console.log(res)
                // History.push("/addcredentials")
                // window.location.reload()

            })
            .catch(err => {
                console.log(err)
            })

    }
    return(
        <div>
            <Container fluid>
            <AdminHeader />
                <Row>
                    <h2 className="mt-2">Add New Credentials</h2>
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
                                    onChange={(e) => { setProvider(e.target.value) }}
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
                                    onChange={(e) => { setUserName(e.target.value) }}
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
                                    onChange={(e) => { setSubscriptionID(e.target.value) }}
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
                                    onChange={(e) => { setTenantID(e.target.value) }}
                                />
                            </FormGroup>
                            <Button className="mt-3 btn-secondary btn-lg" onClick={handle}>
                                Add
                            </Button>
                        </Form>
                    </Col>

                </Row>
            </Container>

        </div>
    )
    
}

export default AddCredentials;