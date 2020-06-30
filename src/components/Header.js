import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

export default function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img
                            src="./logo.png"
                            height="30"
                            width="30"
                            className="d-inline-block aligh-top"
                            alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse id="responsive-navbar-nav">
                        <div>Home</div>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </>
    )
}