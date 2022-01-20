import React from "react";
import { Container, Table } from 'reactstrap';
import AdminHeader from './AdminHeader';
import { isAuth, isAdmin, isUser } from '../helpers/auth';
import { Navigate } from "react-router-dom";

const UserList = () => {

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
                            <th>Edit</th>
                            <th>Delete</th>
                        </thead>

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