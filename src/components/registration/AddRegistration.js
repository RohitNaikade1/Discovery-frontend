import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
} from "reactstrap";
import AdminHeader from "../headers/AdminHeader";
import UserHeader from "../headers/UserHeader";
import axiosInstance from "../../helpers/axios";
import { isAuth } from "../../helpers/auth";
import { Navigate } from "react-router-dom";
import History from "../../helpers/helpers";
import { credentialsFetch } from "../../Redux/Actions/getCredentials";
import { useDispatch, useSelector } from "react-redux";
const AddRegistration = () => {
  const [name, setName] = useState("");
  const [credentialid, setId] = useState("");
  const [resourcegroups, setResourceGroups] = useState(false);
  const [virtualmachines, setVirtualMachines] = useState(false);
  const [virtualnetworks, setVirtualNetworks] = useState(false);
  const [networkinterfaces, setNetworkInterfaces] = useState(false);
  const [networksecuritygroups, setNSG] = useState(false);
  const [disks, setDisks] = useState(false);
  const [storageaccounts, setStorageAccounts] = useState(false);
  const [publicipaddresses, setPubliIP] = useState(false);
  const [databases, setDatabases] = useState(false);
  const [servers, setServers] = useState(false);
  const [subnets, setSubnets] = useState(false);
  const [loadbalancers, setLoadbalancers] = useState(false);

  const dispatch = useDispatch();

  var token = localStorage.getItem("token");
  var decoded = jwt_decode(token);
  var user = decoded.role;

  useEffect(() => {
    dispatch(credentialsFetch());
  }, []);
  const Record = useSelector((state) => state.credentials.credentials);

  let credsId = "";
  if (Record?.data) {
    credsId = Record.data.map((data, key) => {
      return (
        <option value={data.credsid} defaultValue>
          {data.credsid}
        </option>
      );
    });
  }

  const handle = () => {
    const data = {
      name: name,
      url: "/servicediscovery/cloudresources/azure/service/",
      Accounts: {
        credsid: credentialid,
      },
      Categories: [],
    };
    console.log();
    if (data.Accounts.credsid === "") {
      data.Accounts.credsid = Record.data[0].credsid;
    }
    const management = {
      category: "management",
      resource_info: {
        provider: "azure",
        resources: [],
      },
    };
    if (resourcegroups === true) {
      management.resource_info.resources.push("resourcegroups");
    }

    const database = {
      category: "database",
      resource_info: {
        provider: "azure",
        resources: [],
      },
    };
    if (databases === true) {
      database.resource_info.resources.push("databases");
    }
    if (servers === true) {
      database.resource_info.resources.push("servers");
    }

    const storage = {
      category: "storage",
      resource_info: {
        provider: "azure",
        resources: [],
      },
    };
    if (storageaccounts === true) {
      storage.resource_info.resources.push("storageaccounts");
    }
    if (disks === true) {
      storage.resource_info.resources.push("disks");
    }

    const compute = {
      category: "compute",
      resource_info: {
        provider: "azure",
        resources: [],
      },
    };
    if (virtualmachines === true) {
      compute.resource_info.resources.push("virtualmachines");
    }

    const network = {
      category: "network",
      resource_info: {
        provider: "azure",
        resources: [],
      },
    };
    if (virtualnetworks === true) {
      network.resource_info.resources.push("virtualnetworks");
    }
    if (networkinterfaces === true) {
      network.resource_info.resources.push("networkinterfaces");
    }
    if (publicipaddresses === true) {
      network.resource_info.resources.push("publicipaddresses");
    }
    if (networksecuritygroups === true) {
      network.resource_info.resources.push("networksecuritygroups");
    }
    if (loadbalancers === true) {
      network.resource_info.resources.push("loadbalancers");
    }
    if (subnets === true) {
      network.resource_info.resources.push("subnets");
    }

    if (management.resource_info.resources.length >= 1) {
      data.Categories.push(management);
    }
    if (database.resource_info.resources.length >= 1) {
      data.Categories.push(database);
    }
    if (network.resource_info.resources.length >= 1) {
      data.Categories.push(network);
    }
    if (storage.resource_info.resources.length >= 1) {
      data.Categories.push(storage);
    }
    if (compute.resource_info.resources.length >= 1) {
      data.Categories.push(compute);
    }

    var token = localStorage.getItem("token");
    console.log(data);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axiosInstance
      .post("servicediscovery/registration", data, config)
      .then((res) => {
        console.log(res);
        History.push("/addregistration");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const set = (value) => {
    if (value === "resourcegroups") {
      setResourceGroups(!resourcegroups);
    } else if (value === "virtualmachines") {
      setVirtualMachines(!virtualmachines);
    } else if (value === "virtualnetworks") {
      setVirtualNetworks(!virtualnetworks);
    } else if (value === "networkinterfaces") {
      setNetworkInterfaces(!networkinterfaces);
    } else if (value === "networksecuritygroups") {
      setNSG(!networksecuritygroups);
    } else if (value === "disks") {
      setDisks(!disks);
    } else if (value === "storageaccounts") {
      setStorageAccounts(!storageaccounts);
    } else if (value === "publicipaddresses") {
      setPubliIP(!publicipaddresses);
    } else if (value === "databases") {
      setDatabases(!databases);
    } else if (value === "servers") {
      setServers(!servers);
    } else if (value === "subnets") {
      setSubnets(!subnets);
    } else if (value === "loadbalancers") {
      setLoadbalancers(!loadbalancers);
    }
  };

  const tp = (value) => {
    setId(value);
    console.log(credentialid);
  };
  if (isAuth()) {
    return (
      <Container fluid>
        {user == "admin" ? <AdminHeader /> : <UserHeader />}
        <Row>
          <h2 className="mt-2">Add New Registration</h2>
        </Row>
        <Row className="align-items-center mt-4">
          <Col className="col-md-4 col-sm-4"></Col>
          <Col className="col-md-4 col-sm-4">
            <Form inline className="">
              <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label className="ml-0" for="name">
                  Name
                </Label>
                <Input
                  name="name"
                  placeholder="Registration Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                />
              </FormGroup>
              <FormGroup className="mb-2 mt-3 me-sm-2 mb-sm-0">
                <Label className="ml-0" for="credentialid">
                  Credential ID
                </Label>

                <select
                  name="role"
                  onChange={(e) => tp(e.target.value)}
                  className="form-control"
                >
                  {credsId}
                </select>
              </FormGroup>
              <FormGroup className="mb-2 mt-3 me-sm-2 mb-sm-0">
                <Label className="ml-0" for="credentialid">
                  Select Resources
                </Label>
              </FormGroup>
              <FormGroup className="mb-2 me-sm-2 mb-sm-0 mt-3">
                <Row className="form-check">
                  <Col className="col-md-1 col-sm-1">
                    <Input
                      className="form-check-input"
                      onChange={(e) => {
                        set(e.target.value);
                      }}
                      type="checkbox"
                      value="resourcegroups"
                      id="defaultCheck1"
                    />
                  </Col>
                  <Col className="col-md-4 col-sm-4">
                    <Label className="form-check-label" for="defaultCheck1">
                      Resource Groups
                    </Label>
                  </Col>
                  <Col className="col-md-1 col-sm-1">
                    <Input
                      className="form-check-input"
                      onChange={(e) => {
                        set(e.target.value);
                      }}
                      type="checkbox"
                      value="virtualmachines"
                      id="defaultCheck1"
                    />
                  </Col>
                  <Col className="col-md-4 col-sm-4">
                    <Label className="form-check-label" for="defaultCheck1">
                      Virtual Machines
                    </Label>
                  </Col>
                  <Col className="col-md-1 col-sm-1">
                    <Input
                      className="form-check-input"
                      onChange={(e) => {
                        set(e.target.value);
                      }}
                      type="checkbox"
                      value="virtualnetworks"
                      id="defaultCheck1"
                    />
                  </Col>
                  <Col className="col-md-4 col-sm-4">
                    <Label className="form-check-label" for="defaultCheck1">
                      Virtual Networks
                    </Label>
                  </Col>
                  <Col className="col-md-1 col-sm-1">
                    <Input
                      className="form-check-input"
                      onChange={(e) => {
                        set(e.target.value);
                      }}
                      type="checkbox"
                      value="networkinterfaces"
                      id="defaultCheck1"
                    />
                  </Col>
                  <Col className="col-md-4 col-sm-4">
                    <Label className="form-check-label" for="defaultCheck1">
                      Network Interfaces
                    </Label>
                  </Col>
                  <Col className="col-md-1 col-sm-1">
                    <Input
                      className="form-check-input"
                      onChange={(e) => {
                        set(e.target.value);
                      }}
                      type="checkbox"
                      value="networksecuritygroups"
                      id="defaultCheck1"
                    />
                  </Col>
                  <Col className="col-md-6 col-sm-6">
                    <Label
                      className="ml-0 form-check-label"
                      for="defaultCheck1"
                    >
                      Network Security Groups
                    </Label>
                  </Col>
                  <Col className="col-md-1 col-sm-1">
                    <Input
                      className="form-check-input"
                      onChange={(e) => {
                        set(e.target.value);
                      }}
                      type="checkbox"
                      value="disks"
                      id="defaultCheck1"
                    />
                  </Col>
                  <Col className="col-md-4 col-sm-4">
                    <Label className="form-check-label" for="defaultCheck1">
                      Disks
                    </Label>
                  </Col>
                  <Col className="col-md-1 col-sm-1">
                    <Input
                      className="form-check-input"
                      onChange={(e) => {
                        set(e.target.value);
                      }}
                      type="checkbox"
                      value="storageaccounts"
                      id="defaultCheck1"
                    />
                  </Col>
                  <Col className="col-md-4 col-sm-4">
                    <Label className="form-check-label" for="defaultCheck1">
                      Storage Accounts
                    </Label>
                  </Col>
                  <Col className="col-md-1 col-sm-1">
                    <Input
                      className="form-check-input"
                      onChange={(e) => {
                        set(e.target.value);
                      }}
                      type="checkbox"
                      value="publicipaddresses"
                      id="defaultCheck1"
                    />
                  </Col>
                  <Col className="col-md-4 col-sm-4">
                    <Label className="form-check-label" for="defaultCheck1">
                      Public IP Addresses
                    </Label>
                  </Col>
                  <Col className="col-md-1 col-sm-1">
                    <Input
                      className="form-check-input"
                      onChange={(e) => {
                        set(e.target.value);
                      }}
                      type="checkbox"
                      value="databases"
                      id="defaultCheck1"
                    />
                  </Col>
                  <Col className="col-md-4 col-sm-4">
                    <Label className="form-check-label" for="defaultCheck1">
                      Databases
                    </Label>
                  </Col>
                  <Col className="col-md-1 col-sm-1">
                    <Input
                      className="form-check-input"
                      onChange={(e) => {
                        set(e.target.value);
                      }}
                      type="checkbox"
                      value="servers"
                      id="defaultCheck1"
                    />
                  </Col>
                  <Col className="col-md-4 col-sm-4">
                    <Label className="form-check-label" for="defaultCheck1">
                      Servers
                    </Label>
                  </Col>
                  <Col className="col-md-1 col-sm-1">
                    <Input
                      className="form-check-input"
                      onChange={(e) => {
                        set(e.target.value);
                      }}
                      type="checkbox"
                      value="subnets"
                      id="defaultCheck1"
                    />
                  </Col>
                  <Col className="col-md-4 col-sm-4">
                    <Label className="form-check-label" for="defaultCheck1">
                      Subnets
                    </Label>
                  </Col>
                  <Col className="col-md-1 col-sm-1">
                    <Input
                      className="form-check-input"
                      onChange={(e) => {
                        set(e.target.value);
                      }}
                      type="checkbox"
                      value="loadbalancers"
                      id="defaultCheck1"
                    />
                  </Col>
                  <Col className="col-md-4 col-sm-4">
                    <Label className="form-check-label" for="defaultCheck1">
                      Load Balancers
                    </Label>
                  </Col>
                </Row>
              </FormGroup>

              <Button onClick={handle} className="mt-3 btn-secondary btn-lg">
                Add
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default AddRegistration;
