import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

const NavbarView = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">ShoppingList</NavbarBrand>
            <NavbarToggler onClick={toggle}></NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto">
                  <NavItem>
                      <NavLink href="/">aa</NavLink>
                  </NavItem>
              </Nav>
            </Collapse>
          </Container>
      </Navbar>
    </div>
  );
}

export default NavbarView;