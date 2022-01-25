import React, { useState } from "react";
import axiosInstance from "../../helpers/axios";
import jwt_decode from "jwt-decode";
import { Navigate } from 'react-router-dom'
import History from "../../helpers/helpers";
import { isAuth, isAdmin, isUser } from '../../helpers/auth';
import UserHeader from '../headers/UserHeader'
import Profile from "./Profile";
import { Container } from "reactstrap";
const UserProfile = () =>{
    return (
        <Container fluid>
            <UserHeader />
            <Profile />
        </Container>
    )
}

export default UserProfile;