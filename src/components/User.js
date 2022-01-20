import React from "react";
import { Container, Row } from "reactstrap";
import UserHeader from './UserHeader';
import { isAuth,isAdmin,isUser } from '../helpers/auth';
import { Navigate } from "react-router-dom";

const User = () => {

    if(isAuth() && isUser()){
        return (
            <Container fluid>
                {/* <UserHeader /> */}
                <Row>
                    <h2>Logged in successfully!</h2>
                    <p>This is user dashboard.</p>
                </Row>
            </Container>
        )
    }else if(isAuth() && isAdmin()){
        return <Navigate to="/admin" />
    }else{
        return <Navigate to="/" />
    }
    
}

export default User;