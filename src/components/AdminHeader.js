import React from "react";
import { NavbarText, UncontrolledDropdown, DropdownToggle, Navbar, DropdownItem, DropdownMenu, Collapse, Nav, NavbarBrand, NavbarToggler, NavItem, NavLink, Container } from 'reactstrap';
import { signout,isAdmin } from '../helpers/auth'
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
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav  className="nav-link active"
              >
                Credentials
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                    <NavLink className="text-dark" href="/addcredentials">
                      Add
                    </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <NavLink className="text-dark" href="/credentialslist">
                      List
                    </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>



            
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav  className="nav-link active"
              >
                Registration
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                    <NavLink className="text-dark" href="/addregistration">
                      Add
                    </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <NavLink className="text-dark" href="/registrationlist">
                      List
                    </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            
            
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav  className="nav-link active"
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
            <NavItem>
              <NavLink className="nav-link active" href="/adminprofile">
                Profile
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