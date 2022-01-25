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
import AdminHeader from "../headers/AdminHeader";
import { isAuth, isAdmin, isUser } from "../../helpers/auth";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { credentialsFetch } from "../../Redux/Actions/getCredentials";
import History from "../../helpers/helpers";
import axiosInstance from "../../helpers/axios";

const CredentialsList = () => {
  const [show, setShow] = useState(false);
  const [credsid, setCredsid] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(credentialsFetch());
  }, []);

  const edit = (name) => {
    console.log(name);

    History.push(`/editcredentials/${name._id}`);
    window.location.reload();
  };
  const deleteRecord = () => {
    var token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axiosInstance
      .delete(`servicediscovery/credentials/${credsid}`, config)
      .then((res) => {
        console.log(res);
        History.push("/credentialslist");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteRec = (name) => {
    setShow(true);
    console.log(name._id);
    setUsername(name.username);
    setCredsid(name._id);
  };

  const isModalOpen = () => {
    return show;
  };
  const closeModal = () => {
    setShow(false);
  };
  const Record = useSelector((state) => state.credentials);

  let credentials = "";
  if (Record.credentials.data) {
    console.log(Record.credentials.data);
    credentials = Record.credentials.data.map((name, key) => {
      return (
        <tr id={key}>
          <td> {name.credsid} </td> <td> {name.provider} </td>{" "}
          <td> {name.username} </td> <td> {name.subscriptionid} </td>{" "}
          <td> {name.tenantid} </td>{" "}
          <td>
            <button
              type="button"
              onClick={(e) => {
                edit(name);
              }}
              className="btn btn-primary"
            >
              Edit{" "}
            </button>{" "}
            <button
              type="button"
              onClick={(e) => {
                deleteRec(name);
              }}
              className="ml-3 btn btn-danger"
            >
              Delete{" "}
            </button>{" "}
          </td>{" "}
        </tr>
      );
    });
  }

  if (isAuth() && isAdmin()) {
    return (
      <div>
        <Modal
          isOpen={show}
          toggle={(e) => {
            closeModal();
          }}
        >
          <ModalHeader
            toggle={(e) => {
              closeModal();
            }}
          >
            Alert{" "}
          </ModalHeader>{" "}
          <ModalBody> Want to delete a record of {username} ? </ModalBody>{" "}
          <ModalFooter>
            <Button
              color="primary"
              onClick={(e) => {
                deleteRecord();
              }}
            >
              Yes{" "}
            </Button>{" "}
            <Button onClick={closeModal}> No </Button>{" "}
          </ModalFooter>{" "}
        </Modal>{" "}
        <Container fluid>
          <AdminHeader />
          <Table className="mt-3 table-striped">
            <thead>
              <th> Creds ID </th> <th> Provider </th> <th> Username </th>{" "}
              <th> Subscription ID </th> <th> Tenant ID </th> <th> Actions </th>{" "}
            </thead>{" "}
            <tbody> {credentials} </tbody>{" "}
          </Table>{" "}
        </Container>{" "}
      </div>
    );
  } else if (isAuth() && isUser()) {
    return <Navigate to="/user" />;
  } else {
    return <Navigate to="/" />;
  }
};

export default CredentialsList;
