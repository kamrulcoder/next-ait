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
            <Link href={"/#section_1"}>
            <a  className={styles.navLink} >হোম</a>
              </Link>
            <Link href={"/#section_2"}>
            <a  className={styles.navLink} >কোর্স</a>
              </Link>
            <Link href={"/#section_3"}>
            <a  className={styles.navLink} >আমাদের সম্পর্কে</a>
              </Link>
            <Link href={"/#section_4"}>
            <a  className={styles.navLink} >যোগাযোগ</a>
              </Link>
            <Link href={"/result"}>
            <a  className={`${styles.navLink}  ${styles.course}`} >ব্রাউজ কোর্স রেসাল্ট</a>
              </Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </>
  );
}
