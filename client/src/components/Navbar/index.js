import React from "react";
import Nav from "react-bootstrap/Nav";
import "./style.css";

const Navbar = () => {
  return (
    <div>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/weddingparty">Wedding Party</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/photos">Photos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/events">Events</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/thingstodo">Things To Do</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/travel">Travel</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/registry">Registry</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/rsvp">RSVP</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar;
