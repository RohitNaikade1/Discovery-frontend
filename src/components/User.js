import React from "react";
import { Container, Row } from "reactstrap";
import UserHeader from './UserHeader';
const User = () => {
    return (
        <Container fluid>
            <UserHeader />
            <Row>
                <h2>Logged in successfully!</h2>
                <p>This is user dashboard.</p>
            </Row>
        </Container>
    )
}

export default User;