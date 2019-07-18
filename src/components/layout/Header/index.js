import React, { Component } from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faUser } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          {/* <img
            alt=""
            src="../../../assets/logo1.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          /> */}
          <Button variant="outline-light" className="farm1">
            Farmbox
          </Button>
          <Navbar.Brand href="/"> Operação</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#">Mapa</Nav.Link>
            <Nav.Link href="#">Agenda</Nav.Link>
            <Nav.Link href="#">Monitoramentos</Nav.Link>
            <Nav.Link href="#">Aplicações</Nav.Link>
            <Nav.Link href="/insumos">Insumos</Nav.Link>
            <Nav.Link href="#">Pluviometria</Nav.Link>
            <Nav.Link href="#">Semeadura</Nav.Link>
          </Nav>
          <Form inline>
            <Nav.Link href="#" className="lin1">
              <FontAwesomeIcon icon={faCog} />
            </Nav.Link>
            <Nav.Link href="#" className="lin1">
              <FontAwesomeIcon icon={faUser} />
            </Nav.Link>
          </Form>
        </Navbar>
      </>
    );
  }
}
