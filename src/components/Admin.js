import React from "react";
import { Container, Row } from "reactstrap";
import AdminHeader from './AdminHeader';
const Admin = () => {
    return (
        <Container fluid>
            <AdminHeader />
            <Row>
                <h2>Logged in successfully!</h2>
                <p>This is admin dashboard.</p>
            </Row>
        </Container>
    )
}

export default Admin;