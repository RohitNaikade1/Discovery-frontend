import React,{useEffect} from "react";
import { Row, Col,Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import AdminHeader from './AdminHeader';
import { isAuth,isAdmin,isUser } from '../helpers/auth';
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const EditUser = () => {

    const dispatch = useDispatch()
    const Record = useSelector((state) => state);
    if(Record){
        console.log(Record)
    }

    if(isAuth() && isAdmin()){
        return (
            <Container fluid>
                <AdminHeader />
                <Row>
                    <h2 className="mt-2">Edit User Details</h2>
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
                                    type="text"
                                />
                            </FormGroup>
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
                                />
                            </FormGroup>
                            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                                <Label
                                    className="ml-0"
                                    for="password"
                                >
                                    Password
                                </Label>
                                <Input
                                    name="password"
                                    placeholder="Password"
                                    type="password"
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
                                    placeholder="Role"
                                    type="text"
                                />
                            </FormGroup>
                            <Button className="mt-3 btn-secondary btn-lg">
                                Update
                            </Button>
                        </Form>
                    </Col>
    
                </Row> 
            </Container >
        )
    }else if(isAuth() && isUser()){
        return <Navigate to="/user" />
    }else{
        return <Navigate to="/" />
    }
    
}

export default EditUser;