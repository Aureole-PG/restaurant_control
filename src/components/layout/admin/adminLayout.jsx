import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../../redux/actions";
export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispach = useDispatch();
  const singOut = () => {
    dispach({ type: authActions.LOGOUT });
    window.location.reload(false);
  };
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar
        light
        style={{ backgroundColor: "#e2e6f3", boxShadow: "0px 0px 5px 0px" }}
        expand="md"
      >
        <NavbarBrand tag={Link} to="/dashboard">
          {" "}
          Restaurant{" "}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Página Principal
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/dashboard/menu">
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/dashboard/users">
                Usuarios
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/dashboard/tables">
                Mesas
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Opciones
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={singOut}>Cerrar Session</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      {/* <div
        style={{ backgroundImage: `url(${img})` }}
        className="dashboard-background-img"
      ></div> */}
      <Container style={{ paddingTop: 15 }}>{children}</Container>
    </div>
  );
}
