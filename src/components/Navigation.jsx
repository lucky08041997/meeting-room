import React from 'react';
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
    return (
        <Navbar bg="light" variant="light">
            <div className="container">
                <Navbar.Brand href="#home">Halo, Admin!</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/pengajuan-sewa">Pengajuan Sewa</Nav.Link>
                    <Nav.Link href="/sewa-diterima">Data Sewa Diterima</Nav.Link>
                </Nav>
            </div>
        </Navbar >
    )
}
