import React, { useState, useEffect } from "react";
import { Container, Table, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import AdminHeader from './AdminHeader';
import { isAuth, isAdmin, isUser } from '../helpers/auth';
import { Navigate,generatePath } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userFetch } from '../Redux/Actions/getUsers';
import { editData } from '../Redux/Actions/editData'
import EditUser from "./EditUser";
import History from "../helpers/helpers";
import axiosInstance from "../helpers/axios";;

const UserList = () => {

    const [show, setShow] = useState(false);
    const [id, setId] = useState("");
    const [fname, setFname] = useState('')
    const [sname, setSname] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userFetch());
    }, [])
    
    const edit = (name) => {

        console.log(name)

        History.push(`/edituser/${name._id}`);
        window.location.reload()
        
    }
    const deleteRecord = () => {

        var token = localStorage.getItem("token")

        const config = {
            headers: {
                Authorization: `Bearer ${token}`

            }
        };
        axiosInstance.delete(`servicediscovery/users/${id}`, config
        )
            .then(res => {
                console.log(res)
                History.push("/userlist")
                window.location.reload()

            })
            .catch(err => {
                console.log(err)
            })

    }
    const deleteRec = (name) => {
        setShow(true)
        setFname(name.firstname)
        setSname(name.lastname)
        setId(name._id)

    }

    const isModalOpen = () => {
        return show
    }
    const closeModal = () => {
        setShow(false)
    }
    

    
    const Record = useSelector((state) => state.usersList);
    console.log(Record)
    let usersData = "";
    if (Record.users.data) {
        usersData = Record.users.data.map((name, key) => {

            return (
                <tr id={key}>
                    <td>{name.firstname}</td>
                    <td>{name.lastname}</td>
                    <td>{name.username}</td>
                    <td>{name.email}</td>
                    <td>{name.role}</td>
                    <td><button type="button" onClick={e => { edit(name) }} className="btn btn-primary">Edit</button> <button type="button" onClick={e => { deleteRec(name) }} className="ml-3 btn btn-danger">Delete</button></td>
                </tr>
            );
        });
    }


    if (isAuth() && isAdmin()) {

        return (
            <div>
                <Modal
                    isOpen={show}
                    toggle={e => { closeModal() }}
                >
                    <ModalHeader toggle={e => { closeModal() }}>
                        Alert
                    </ModalHeader>
                    <ModalBody>
                        Want to delete a record of {fname} {sname} ?
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={e=>{deleteRecord()}}
                        >
                            Yes
                        </Button>
                        {' '}
                        <Button onClick={closeModal}>
                            No
                        </Button>
                    </ModalFooter>
                </Modal>

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