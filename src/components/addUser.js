import React from "react";
import { Row, Col, Navbar, NavbarBrand, Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import AdminHeader from './AdminHeader';
const addUser = () => {
    return (
        <Container fluid>
            <AdminHeader />
            {/* <Row>
                <h2 className="mt-2">Login</h2>
            </Row>
            <Row className="align-items-center mt-4">
                <Col className="col-md-4 col-sm-4"></Col>
                <Col className="col-md-4 col-sm-4">
                    <Form inline className="">
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Label
                                className="ml-0"
                                for="exampleEmail"
                            >
                                Username
                            </Label>
                            <Input
                                name="Username"
                                placeholder="Username"
                                type="text"
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
                            />
                        </FormGroup>
                        <Button className="mt-3 btn-secondary btn-lg">
                            login
                        </Button>
                    </Form>
                </Col>

            </Row> */}
        </Container >
    )
}

export default addUser;