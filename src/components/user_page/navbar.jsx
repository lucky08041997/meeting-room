import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../assets/meeting-room.svg'


export default class navigation extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
                <div className="container">
                    <Navbar.Brand href="/">
                        <img src={Logo} width="30"height="30" className="d-inline-block align-top" alt="React Bootstrap logo" />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </div>
            </Navbar>
        )
    }
}
