import React from "react";
import { Navbar, Container, Nav , NavDropdown } from "react-bootstrap";
import Image from 'next/image';
import logo from "../../public/images/logo.png"
import  styles from "./Header.module.css"
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  sticky="top">

        <Container>
          <Navbar.Brand href="/"  as={Link}><Image
            src={logo}
            alt="Logo "
            width={120}
             height={60}
          ></Image></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav "  className="justify-content-end   align-items-center">
            <Nav  className="align-items-center">
              <Nav.Link   className={styles.navLink} href="#section_1" ref={React.createRef()} >হোম</Nav.Link>
              <Nav.Link className={styles.navLink} href="#section_2"ref={React.createRef()}>কোর্স </Nav.Link>
              <Nav.Link className={styles.navLink} href="#section_3" ref={React.createRef()}>আমাদের সম্পর্কে</Nav.Link>
              <Nav.Link className={styles.navLink} href="#section_5"ref={React.createRef()}>যোগাযোগ</Nav.Link>
              <Nav.Link className={`${styles.navLink}  ${styles.course}`} href="#deets">ব্রাউজ কোর্স রেসাল্ট </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </>
  );
}
