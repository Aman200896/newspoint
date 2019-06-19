import React from 'react'
import {Navbar , Nav} from 'react-bootstrap'


class NAVBAR extends React.Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">News Point</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/rashi">About US</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar>
        )
    }
}
export default NAVBAR;