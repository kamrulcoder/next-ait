import React, { useEffect } from 'react'
import logo from "../../public/images/logo.png"
import { Row, Col, Container } from "react-bootstrap";
import Image from 'next/image';
import {  FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import styles from "./footer.module.css"

import AOS from "aos";

export default function Footer() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    
    <section  className={styles.footer} >
      <Container>
        <Row  className={`${styles.footerRow} `}>
          <Col  lg={3}  sm={12}>
          <div className="footer-logo">
          <Image
            src={logo}
            alt="Logo "
            width={120}
             height={60}
          ></Image>
          </div>
            </Col >
            <Col  lg={5}  sm={12}>
              <div className={styles.footerText}>
                <p>Copyright © 2022 Advance  IT Institute. All right reserved </p>
              </div>
            </Col>
            <Col  lg={4}  sm={12}>
              
                <ul className={styles.footerSocial}>
                  <li><a href="#"><FaFacebook/></a></li>
                  <li><a href="#"><FaYoutube/></a></li>
                  <li><a href="#"><FaTwitter/></a></li>
                  <li><a href="#"><FaLinkedin/></a></li>
                </ul>
              
            </Col>
        </Row>
      </Container>
    </section>
  )
}
