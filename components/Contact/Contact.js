import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import styles from "./contact.module.css";

export default function Contact() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section className={styles.contactArea}>
        <Container>
          <div className="contactHeader">
            <Row>
              <Col lg={10}>
                <div data-aos="fade-up" className={styles.contactHeader}>
                  <h2>যোগাযোগ</h2>
                  <p>
                    যে কোনো প্রয়োজনে যোগাযোগ করতে সরাসরি আমাদের অফিস ভিজিট করতে
                    পারেন। তাছাড়া হটলাইন নম্বরে কল করে জেনে নিতে পারেন ট্রেইনিং
                    সংক্রান্ত যেকোনো তথ্য। এছাড়াও উল্লেখিত মেইলে কিংবা ফেসবুক
                    ম্যাসেঞ্জারেও নক দিতে পারেন।
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="contactMap">
            <Row>
              <Col lg={6}>
                <div className="map " data-aos="flip-right">
                  <div className={styles.office_map}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 131 46">
                    <polygon points="0.1 34.3 15.9 45.9 15.9 31.8 0.1 31.8 0.1 34.3" fill="#367645">
                  </polygon>
                  <polygon points="130.9 34.2 0.1 34.2 0.1 0.2 130.9 0.2 119.1 17.2 130.9 34.2" fill="#35ab51"></polygon>
                  
                 <path d="M74.1,17.7a4.16,4.16,0,0,1,1.2-3.3,3.89,3.89,0,0,1,5.2.2,4,4,0,0,1,1,3A5.36,5.36,0,0,1,81,20a4.36,4.36,0,0,1-1.3,1.4,4.14,4.14,0,0,1-1.9.5,3.69,3.69,0,0,1-2.7-1.1A4.29,4.29,0,0,1,74.1,17.7Zm1.3,0a3.17,3.17,0,0,0,.7,2.3,2.14,2.14,0,0,0,1.7.8,2.29,2.29,0,0,0,1.7-.8,3.7,3.7,0,0,0,.7-2.3,2.92,2.92,0,0,0-.7-2.2,2.21,2.21,0,0,0-3.4,0A3.2,3.2,0,0,0,75.4,17.7Z" fill="#fff"></path><path d="M87.3,21.7V14.8H84.8v6.9H83.5V14.8H82.3v-1h1.2V13a3,3,0,0,1,.5-1.8,2,2,0,0,1,1.6-.6,6.75,6.75,0,0,1,1.4.2l-.2,1.1c-.3,0-.5-.1-.7-.1a1.33,1.33,0,0,0-1,.3,1.74,1.74,0,0,0-.3,1.2v.5h2.5V13a3,3,0,0,1,.5-1.8,2,2,0,0,1,1.6-.6,6.75,6.75,0,0,1,1.4.2l-.2,1.1c-.3,0-.5-.1-.7-.1a1.33,1.33,0,0,0-1,.3,1.74,1.74,0,0,0-.3,1.2v.5h1.5v1H88.6v6.9Zm4-9.5V10.6h1.3v1.6Zm0,9.5v-8h1.3v8Z" fill="#fff"></path><path d="M99.9,18.7l1.3.2a3.09,3.09,0,0,1-1.1,2.1,3.53,3.53,0,0,1-4.8-.3,4.14,4.14,0,0,1-1-3.1,5.56,5.56,0,0,1,.4-2.3A3.74,3.74,0,0,1,96,13.8a4.14,4.14,0,0,1,1.9-.5,2.82,2.82,0,0,1,2.1.7,3.56,3.56,0,0,1,1.1,1.9l-1.3.2a1.85,1.85,0,0,0-.7-1.2,1.59,1.59,0,0,0-1.2-.4,2.19,2.19,0,0,0-1.7.7,3.17,3.17,0,0,0-.6,2.3,3.52,3.52,0,0,0,.6,2.3,1.86,1.86,0,0,0,1.6.7,1.9,1.9,0,0,0,1.3-.5C99.5,19.9,99.8,19.4,99.9,18.7Z" fill="#fff"></path><path d="M107.8,19.1l1.4.2a3.47,3.47,0,0,1-1.2,1.9,3.51,3.51,0,0,1-2.3.7,3.76,3.76,0,0,1-2.8-1.1,4,4,0,0,1-1-3,4.29,4.29,0,0,1,1-3.1,3.69,3.69,0,0,1,2.7-1.1,3.47,3.47,0,0,1,2.6,1.1,4.14,4.14,0,0,1,1,3.1v.4h-5.9a3.65,3.65,0,0,0,.7,2,2.06,2.06,0,0,0,1.7.7,2,2,0,0,0,1.3-.4A2.73,2.73,0,0,0,107.8,19.1Zm-4.4-2.2h4.4a2.64,2.64,0,0,0-.5-1.5,2.14,2.14,0,0,0-1.7-.8,2.45,2.45,0,0,0-1.6.6A2.52,2.52,0,0,0,103.4,16.9Z" fill="#fff"></path></svg>
                  <div className="mapwrap">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11714.549414611747!2d91.83467554145878!3d22.359224097649065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad274609dda25f%3A0xd59761fea5a91d3b!2sCreative%20IT%20Institute%2C%20Chattogram%20Branch!5e0!3m2!1sen!2sbd!4v1567660579067!5m2!1sen!2sbd" width="100%" height="300" frameborder="0"  allowfullscreen=""></iframe>
                  </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="mapAddress" data-aos="flip-left">
                  <div className={styles.office}>
                    <h4> অফিস </h4>
                    <ul>
                      <li>মুসলিম মার্কেট (৩য় তলা ),</li>
                      <li>সাউথইস্ট ব্যাংকের উপরে</li>
                      <li>শহীদ বুলবুল সড়ক, </li>
                      <li>শেরপুর টাউন, শেরপুর। </li>
                    </ul>
                  </div>
                  <div className={styles.contactAddress}>
                    <div className={styles.phoneNumber}>
                      <h4>ফোন নাম্বার</h4>
                      <ul>
                        <li>+8801718067882</li>
                        <li>+8801718067882</li>
                      </ul>
                    </div>
                    <div className={styles.phoneNumber}>
                      <h4>অফিস ভিজিটের সময়</h4>
                      <ul>
                        <li>শনিবার - শুক্রবার</li>
                        <li>সকাল ৯ টা থেকে রাত ৮ টা</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}
