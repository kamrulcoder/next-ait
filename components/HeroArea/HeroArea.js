import React, { useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { AwesomeButton } from "react-awesome-button";
import Image from "next/image";
import heroImg from "../../public/images/hero-img.png";
import styles from "./heroArea.module.css"
import AOS from "aos";

export default function HeroArea() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id={styles.HeroArea} >
      <Container>
        <Row   className={`align-items-center  ${styles.orderRow}`}  >
          <Col lg={6}  >
            <div className={styles.heroLeft} >
              <h2  data-aos="fade-up"
     data-aos-duration="3000">নিজের মত শিখুন,  <span> আত্মবিশ্বাস গড়ুন!</span></h2>
              <p data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
              এডভান্সড আইটি তোমাকে ভবিষ্যতের জন্য দক্ষ করে গড়ে তোলে এবং ক্যারিয়ার দৌঁড়ে অনেক প্রতিযোগী থেকে এগিয়ে রাখে।  <br /><br/>
              বর্তমান সময়ের কর্মসংস্থান হলো দক্ষতাভিত্তিক। যার দক্ষতা যত বেশি, তার কাজের সুযোগও তত বেশি। ভবিষ্যতে এমনটা আরও বাড়বে। তাই এখনই দক্ষ হওয়ার কোনো বিকল্প নেই।
              </p>

              <AwesomeButton type="primary" size="large" href="#section_2" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                কোর্সগুলো দেখুন
              </AwesomeButton>
            </div>
          </Col>
          <Col lg={6}   >
            <div className={styles.heroRight} data-aos="fade-up">
              <Image src={heroImg} alt="Logo "></Image>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
