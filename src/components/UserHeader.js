import React from "react";
import { signout } from '../helpers/auth'
import { NavbarText, UncontrolledDropdown, DropdownToggle, Navbar, DropdownItem, DropdownMenu, Collapse, Nav, NavbarBrand, NavbarToggler, NavItem, NavLink, Container } from 'reactstrap';
const Header = () => {
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
                            <NavLink  className="nav-link active" href="/admin">
                                Credentials
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  className="nav-link active" href="">
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
}

export default Header;