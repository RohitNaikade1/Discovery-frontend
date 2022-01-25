import React from "react";
import { NavbarText, UncontrolledDropdown, DropdownToggle, Navbar, DropdownItem, DropdownMenu, Collapse, Nav, NavbarBrand, NavbarToggler, NavItem, NavLink, Container } from 'reactstrap';
import { signout,isAuth, isAdmin, isUser } from '../../helpers/auth'
import { Navigate } from "react-router-dom";
const Header = () => {

    if (isAuth() && isAdmin()) {
        return (

            <div>
                <Navbar
                    color="dark"
                    expand="md"
                    dark
                >
                    <NavbarBrand href="/">
                        Custom-Discovery
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink className="nav-link active" href="/user">
                                    Credentials
                                </NavLink>
                            </NavItem>


                            <NavItem>
                                <NavLink className="nav-link active" href="">
                                    Registrations
                                </NavLink>
                            </NavItem>


                            <UncontrolledDropdown
                                inNavbar
                                nav
                            >
                                <DropdownToggle
                                    caret
                                    nav className="nav-link active"
                                >
                                    User
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink className="text-dark" href="/adduser">
                                            Add
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <NavLink className="text-dark" href="/userlist">
                                            List
                                        </NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <NavbarText>
                            <NavLink onClick={signout}>
                                Logout
                            </NavLink>

                        </NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        )
    } else if(isAuth() && isUser()){
        return (
            <div>
                <Navbar
                    color="dark"
                    expand="md"
                    dark
                >
                    <NavbarBrand href="/">
                        Custom-Discovery
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink className="nav-link active" href="/admin">
                                    Credentials
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link active" href="">
                                    Registrations
                                </NavLink>
                            </NavItem>

                        </Nav>
                        <NavbarText>
                            <NavLink onClick={signout}>
                                Logout
                            </NavLink>

                        </NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        )
    }else{
        <Navigate to="/" />
    }

}

export default Header;