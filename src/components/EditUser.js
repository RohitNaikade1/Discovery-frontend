import React, { useEffect, useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button, Container, TabPane } from 'reactstrap';
import AdminHeader from './AdminHeader';
import { isAuth, isAdmin, isUser } from '../helpers/auth';
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Redux/Actions/getUsers';
import axiosInstance from "../helpers/axios";

const EditUser = () => {

    const params = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser(params.id))
    }, [params]);

    const Record = useSelector((state) => state.usersList.editUser.data);

    const [role, setRole] = useState("user");

    const handle = () => {
        const data = {
            firstname: Record.firstname,
            lastname: Record.lastname,
            username: Record.username,
            email: Record.email,
            role: role
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

    const tp = (tp) => {
        setRole(tp)
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
                                    value={Record?.lastname}
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
                                    value={Record?.email}
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
                                <select name="role" onChange={e => tp(e.target.value)} className="form-control">
                                    <option value="admin" selected>Admin</option>
                                    <option value="user">User</option>
                                </select>
                            </FormGroup>
                            <Button onClick={e => { handle() }} className="mt-3 btn-secondary btn-lg">
                                Update
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

export default EditUser;