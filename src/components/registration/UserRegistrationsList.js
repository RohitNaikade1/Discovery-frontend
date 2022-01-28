import React, { useEffect } from "react";
import { Container, Table } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getRegistration } from "../../Redux/Actions/registrations";
import UserHeader from "../headers/UserHeader";

const UserRegistrationList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRegistration());
  }, []);

  const Record = useSelector((state) => state.registrations.registrations);
  console.log(Record);
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
            <th>Sr.No</th>
            <th>Registration Name</th>
            <th>Credential ID</th>
            <th>Resources</th>
          </thead>
          <tbody>{registrations}</tbody>
        </Table>
      </Container>
    </div>
  );
};

export default UserRegistrationList;
