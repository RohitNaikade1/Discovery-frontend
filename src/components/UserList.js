import React from "react";
import {Container, Table } from 'reactstrap';
import AdminHeader from './AdminHeader';
const UserList = () => {
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
}

export default UserList;