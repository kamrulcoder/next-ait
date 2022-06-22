import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "./Courses.module.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import "./swipper.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AwesomeButton } from "react-awesome-button";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Courses() {
  return (
    <div  className={styles.courseArea}>
      <Container>
        <div className={styles.courseheader}>
          <Row>
            <Col lg={8}>
              <h2>কোর্স সমূহ</h2>
              <p>
                বর্তমান বিশ্বের ট্রেন্ডি এবং চাহিদাসম্পন্ন সব কোর্স রয়েছে
                ক্রিয়েটিভ আইটি ইন্সটিটিউটে। কোর্স করার সময় যে প্রয়োজনীয়
                কনফিগারেশনের কম্পিউটার দরকার, তার সবই রয়েছে আমাদের ল্যাবে। আপনি
                চাইলেই ক্লাস শেষে ল্যাবে বসে কোর্স বিষয়ক যেকোনো কিছু প্র্যাকটিস
                করতে পারেন। প্রতিটি কোর্স এমনভাবে সাজানো হয়েছে, যাতে কোর্স শেষে
                প্রতিটি টপিকে কাজ করার আত্মবিশ্বাস আপনার থাকে।
              </p>
            </Col>
          </Row>
        </div>
        <div className={styles.allCourse}>
          <h2>সকল কোর্স</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                Navigation: false,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Card >
                <Card.Img
                  variant="top"
                  src="https://app.creativeitinstitute.com/wp-content/uploads/2022/01/Graphic-Design-Training-Program_Bangladesh.jpg"
                />
                <Card.Body>
                  <Card.Title>প্রফেশনাল গ্রাফিক ডিজাইন</Card.Title>
                  <h4>
                    <span>৳ </span>350
                  </h4>
                  <AwesomeButton
                    type="primary"
                    size="large"
                    href="#section_2"
                    style={{ width: "100%" }}
                  >
                    এখনই ভর্তি হোন
                  </AwesomeButton>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://app.creativeitinstitute.com/wp-content/uploads/2022/01/Graphic-Design-Training-Program_Bangladesh.jpg"
                />
                <Card.Body>
                  <Card.Title>প্রফেশনাল গ্রাফিক ডিজাইন</Card.Title>
                  <h4>
                    <span>৳ </span>350
                  </h4>
                  <AwesomeButton
                    type="primary"
                    size="large"
                    href="#section_2"
                    style={{ width: "100%" }}
                  >
                    এখনই ভর্তি হোন
                  </AwesomeButton>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://app.creativeitinstitute.com/wp-content/uploads/2022/01/Graphic-Design-Training-Program_Bangladesh.jpg"
                />
                <Card.Body>
                  <Card.Title>প্রফেশনাল গ্রাফিক ডিজাইন</Card.Title>
                  <h4>
                    <span>৳ </span>350
                  </h4>
                  <AwesomeButton
                    type="primary"
                    size="large"
                    href="#section_2"
                    style={{ width: "100%" }}
                  >
                    এখনই ভর্তি হোন
                  </AwesomeButton>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://app.creativeitinstitute.com/wp-content/uploads/2022/01/Graphic-Design-Training-Program_Bangladesh.jpg"
                />
                <Card.Body>
                  <Card.Title>প্রফেশনাল গ্রাফিক ডিজাইন</Card.Title>
                  <h4>
                    <span>৳ </span>350
                  </h4>
                  <AwesomeButton
                    type="primary"
                    size="large"
                    href="#section_2"
                    style={{ width: "100%" }}
                  >
                    এখনই ভর্তি হোন
                  </AwesomeButton>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
}
