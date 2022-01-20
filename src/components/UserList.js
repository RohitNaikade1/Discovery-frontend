import React, { useEffect } from "react";
import { Container, Table } from 'reactstrap';
import AdminHeader from './AdminHeader';
import { isAuth, isAdmin, isUser } from '../helpers/auth';
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userFetch } from '../Redux/Actions/getUsers';
import EditUser from "./EditUser";
import History from "../helpers/helpers";
const UserList = () => {

    const edit = (name) => {
        console.log(name)
        // History.push({
        //     pathname:'/edituser',
        //     state:name })
        // window.location.reload();
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userFetch());
    }, [])
    const Record = useSelector((state) => state.usersList);

    let usersData = "";
    if (Record.users.data) {
        usersData = Record.users.data.map((name, key) => {

            return (
                <tr id={key}>
                    <td>{name.first_name}</td>
                    <td>{name.last_name}</td>
                    <td>{name.username}</td>
                    <td>{name.email}</td>
                    <td>{name.role}</td>
                    <td><button type="button" onClick={e => { edit(name) }} className="btn btn-primary">Edit</button> <button type="button" className="ml-3 btn btn-danger">Delete</button></td>
                </tr>
            );
        });
    }


    if (isAuth() && isAdmin()) {

        return (
            <div>
                <Container fluid>
                    <AdminHeader />
                    <Table className="mt-3 table-striped">
                        <thead>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            {usersData}
                        </tbody>
                    </Table>
                </Container>

            </div>
        )
    } else if (isAuth() && isUser()) {
        return <Navigate to="/user" />
    } else {
        return <Navigate to="/" />
    }

}

export default UserList;