import React from "react";
import styles from "./Aboutus.module.css";
import technicalLogo from "../../public/images/technical-logo.png";
import technicalImage from "../../public/images/r8.jpg";
import Image from "next/image";
import { Row, Container, Col } from "react-bootstrap";

export default function Aboutus() {
  return (
    <div className="aboutArea">
      <Container>
        <Row>
          <Col lg={8}>
            <div className={styles.aboutLeft}>
              <h2>আমাদের সম্পর্কে</h2>
              <p>
                এডভান্স আইটি ইনস্টিটিউট, আইটিতে সাফল্য সৃষ্টির লক্ষ্যে
                প্রতিষ্ঠিত একটি বিশ্বস্ত প্রতিষ্ঠান। প্রতিষ্ঠা লগ্ন থেকে শুরু
                করে এখন পর্যন্ত সুদীর্ঘ ১০ বছরে ক্রিয়েটিভ আইটি অর্জন করেছে
                বহুমুখী সাফল্য। অবদান রেখে চলেছে ডিজিটাল বাংলাদেশ বিনির্মাণে।
                বাংলাদেশের অন্যতম প্রধান আইটি প্রতিষ্ঠানটি ২০১২ সাল থেকে বেকার
                সমস্যা দূর করতেও গুরুত্বপূর্ণ ভূমিকা পালন করে আসছে।
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="aboutRight">
              <Image src={technicalLogo} alt="Technical Logo "></Image>
            </div>
          </Col>
        </Row>
        <div className="aboutExpert">
            <Row  className="align-items-center">
                <Col  lg={6}>
                    <div className={styles.aboutExpertLeft}>
                        <span>গৌরবের ১৩ বছর</span>
                        <h2>আইটি এক্সপার্ট তৈরির  <br /> জগতে বিশ্বস্ত প্রতিষ্ঠান</h2>
                        <p>আধুনিক প্রযুক্তির সাথে তাল মিলিয়ে নিজেকে আপডেটেড রাখতে আপনার পাশে রয়েছে এডভান্স  আইটি ইন্সটিটিউট। আইটি সেক্টর বা নন-আইটি সেক্টর, সবখানেই এখন আইটি এক্সপার্টদের ভালো চাহিদা রয়েছে। এজন্যই আপডেটেড কারিকুলাম, অভিজ্ঞ মেন্টর আর আধুনিক ল্যাব নিয়ে দীর্ঘ ১৩ বছর যাবত আমরা তৈরি করে চলেছি আইটি এক্সপার্ট। এর ধারাবাহিকতায় আমরা পেয়েছি ৫০ হাজারেরও বেশি সফল মুখ, যারা নিজেরা স্বাবলম্বী হয়ে কর্মসংস্থান তৈরি করেছেন আরও মানুষের। আর এই শিক্ষার্থীদের সাফল্য আমাদের পথচলার অনুপ্রেরণা। আমরা বিশ্বাস করি প্রতিটি মানুষই প্রতিভাবান, আর আপনার প্রতিভা বিকাশের দায়িত্ব আমাদের। প্রয়োজন কেবল আপনার আগ্রহ এবং নিয়মিত অনুশীলনের।</p>
                    </div>
                </Col>
                <Col  lg={6}>
                    <div className="aboutExperRightt">
              <Image src={technicalImage} alt="Technical Image  "></Image>

                    </div>
                </Col>
            </Row>
        </div>
      </Container>
    </div>
  );
}
