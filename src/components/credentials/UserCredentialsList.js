import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import UserHeader from "../headers/UserHeader";
import { isAuth, isAdmin, isUser } from "../../helpers/auth";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { credentialsFetch } from "../../Redux/Actions/getCredentials";
import History from "../../helpers/helpers";
import axiosInstance from "../../helpers/axios";

const UserCredentialsList = () => {
  const [show, setShow] = useState(false);
  const [credsid, setCredsid] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(credentialsFetch());
  }, []);

  
  const isModalOpen = () => {
    return show;
  };
  const closeModal = () => {
    setShow(false);
  };
  const Record = useSelector((state) => state.credentials);
  console.log(Record.credentials.data)
  let credentials = "";
  if (Record.credentials.data) {
    console.log(Record.credentials.data);
    credentials = Record.credentials.data.map((name, key) => {
      return (
        <tr id={key}>
          <td> {name.credsid} </td> <td> {name.provider} </td>{" "}
          <td> {name.username} </td> <td> {name.subscriptionid} </td>{" "}
          <td> {name.tenantid} </td>{" "}

        </tr>
      );
    });
  }

  
    return (
      <div>
        <Container fluid>
          <UserHeader />
          <Table className="mt-3 table-striped">
            <thead>
              <th> Creds ID </th> <th> Provider </th> <th> Username </th>{" "}
              <th> Subscription ID </th> <th> Tenant ID </th> 
            </thead>{" "}
            <tbody> {credentials} </tbody>{" "}
          </Table>{" "}
        </Container>{" "}
      </div>
    );
  }

export default UserCredentialsList;
