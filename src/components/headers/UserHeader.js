import React from "react";
import { signout } from "../../helpers/auth";
import {
  NavbarText,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  DropdownItem,
  DropdownMenu,
  Collapse,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
const Header = () => {
  return (
    <div>
      <Navbar color="dark" expand="md" dark>
        <NavbarBrand href="/">Custom-Discovery</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav className="nav-link active">
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
                  <NavLink className="text-dark" href="/credslist">
                    List
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink className="text-dark" href="/usercreds">
                    Your Credentials
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav className="nav-link active">
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
                  <NavLink className="text-dark" href="">
                    List
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink className="nav-link active" href="/userprofile">
                Profile
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <NavLink onClick={signout}>Logout</NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
