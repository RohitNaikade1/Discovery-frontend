import React, { useEffect, useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button, Container, TabPane } from 'reactstrap';
import AdminHeader from '../headers/AdminHeader';
import { isAuth, isAdmin, isUser } from '../../helpers/auth';
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCred } from '../../Redux/Actions/getCredentials';
import axiosInstance from "../../helpers/axios";
import History from "../../helpers/helpers";
const EditCredentials = () => {

    const params = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCred(params.id))
    }, [params]);

    const Record = useSelector((state) => state.credentials.cred.data);

    const [provider,setProvider] = useState("");
    const [application,setApplication] = useState("");
    const [tenantId,setTenant] = useState("")
    const [subscription,setSubscription] = useState("")

    const changeProvider =(value)=>{
        Record.provider=value
        setProvider(value)
    }
    const changeApplication =(value)=>{
        Record.username=value
        setApplication(value)
    }
    const changeTenant =(value)=>{
        Record.tenantid=value
        setTenant(value)
    }
    const changeSubscription =(value)=>{
        Record.subscriptionid=value
        setSubscription(value)
    }
    const handle = () => {
        const data = {
            provider: provider,
            username: application,
            tenantid: tenantId,
            subscriptionid: subscription
        }
        if(provider===""){
            data.provider=Record.provider
        }
        
        if(application===""){
            data.username=Record.username
        }

        if(tenantId===""){
            data.tenantid=Record.tenantid
        }

        if(subscription===""){
            data.subscriptionid=Record.subscriptionid
        }



        var token = localStorage.getItem("token")
        console.log(data)


        const config = {
            headers: {
                Authorization: `Bearer ${token}`

            }
        };
        axiosInstance.put(`/servicediscovery/credentials/${params.id}`, data, config
        )
            .then(res => {
                console.log(res)
                History.push("/credentialslist")
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
                    <h2 className="mt-2">Edit Credentials</h2>
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
                                    value={Record?.provider}
                                    onChange={e=>{changeProvider(e.target.value)}}
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
                                    value={Record?.username}
                                    onChange={e=>{changeApplication(e.target.value)}}
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
                                    value={Record?.subscriptionid}
                                    onChange={e=>{changeSubscription(e.target.value)}}
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
                                    value={Record?.tenantid}
                                    onChange={e=>{changeTenant(e.target.value)}}
                                    placeholder="tenantid"
                                    type="text"
                                    
                                />
                            </FormGroup>
                            <Button onClick={e=>handle()} className="mt-3 btn-secondary btn-lg">
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