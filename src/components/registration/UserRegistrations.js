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
import { getUserRegistration } from "../../Redux/Actions/registrations";
import History from "../../helpers/helpers";
import axiosInstance from "../../helpers/axios";

const UserRegistrations = () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserRegistration());
  }, []);

  const edit = (name) => {
    console.log(name);

    History.push(`/editregistration/${name._id}`);
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
      .delete(`servicediscovery/registration/${id}`, config)
      .then((res) => {
        console.log(res);
        History.push("/uregistrations");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteRec = (name) => {
    setShow(true);
    setFname(name.firstname);
    setSname(name.lastname);
    setId(name._id);
  };

  // const isModalOpen = () => {
  //   return show;
  // };
  const closeModal = () => {
    setShow(false);
  };

  const Record = useSelector((state) => state.registrations.userReg);
  console.log(Record.data);
  let registrations = "";
  if (Record?.data) {
    registrations = Record.data.map((name, key) => {
      return (
        <tr id={key}>
          <td>{key + 1}</td>
          <td>{name.name}</td>
          <td>{name.accounts.credsid}</td>
          <td>
            {name.categories.map((f1, key) => {
              return (
                <td>
                  {f1.resource_info.resources.map((f2, key) => {
                    return <td> {f2}</td>;
                  })}
                </td>
              );
            })}
          </td>
          <td>
            <button
              type="button"
              onClick={(e) => {
                edit(name);
              }}
              className="btn btn-primary"
            >
              Edit
            </button>{" "}
            <button
              type="button"
              onClick={(e) => {
                deleteRec(name);
              }}
              className="ml-3 btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

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
          Alert
        </ModalHeader>
        <ModalBody>
          Want to delete a record of {fname} {sname} ?
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={(e) => {
              deleteRecord();
            }}
          >
            Yes
          </Button>{" "}
          <Button onClick={closeModal}>No</Button>
        </ModalFooter>
      </Modal>

      <Container fluid>
        <UserHeader />
        <Table className="mt-3 table-striped">
          <thead>
            <th>Sr.No</th>
            <th>Registration Name</th>
            <th>Credential ID</th>
            <th>Resources</th>
            <th>Actions</th>
          </thead>
          <tbody>{registrations}</tbody>
        </Table>
      </Container>
    </div>
  );
};
export default UserRegistrations;
