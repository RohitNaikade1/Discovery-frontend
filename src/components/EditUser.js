import React, { useEffect, useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button, Container, TabPane } from 'reactstrap';
import AdminHeader from './AdminHeader';
import { isAuth, isAdmin, isUser } from '../helpers/auth';
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Redux/Actions/getUsers';
import axiosInstance from "../helpers/axios";
import History from "../helpers/helpers";

const EditUser = () => {

    const params = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser(params.id))
    }, [params]);

    const Record = useSelector((state) => state.usersList.editUser.data);
    const [firstname,setFirstName] = useState("")
    const [lastname,setLastName] = useState("")
    const [username,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [role, setRole] = useState("");
    
    const fname=(val)=>{
        Record.firstname=val
        setFirstName(val)
    }
    const lname=(val)=>{
        Record.lastname=val
        setLastName(val)
    }
    const uname=(val)=>{
        Record.username=val
        setUserName(val)
    }
    const emailUpdate=(val)=>{
        Record.email=val
        setEmail(val)
    }

    const handle = () => {

        
        const data = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            role: role,
            password:Record.password
        }
        if(firstname===""){
            data.firstname=Record.firstname
        }
        
        if(lastname===""){
            data.lastname=Record.lastname
        }

        if(username===""){
            data.username=Record.username
        }

        if(email===""){
            data.email=Record.email
        }

        if(role===""){
            data.role=Record.role
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
                                    onChange={e=>{fname(e.target.value)}}
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
                                    onChange={e=>{lname(e.target.value)}}
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
                                    onChange={e=>{uname(e.target.value)}}
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
                                    onChange={e=>{emailUpdate(e.target.value)}}
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