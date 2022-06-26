import { style } from "@mui/system";
import Image from "next/image";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import Layout from "../../components/Layout";
import courseImg from "../../public/images/Graphic-Design-Training-Program_Bangladesh.jpg";
import styles from "./course.module.css";
export default function SingleCourse() {
  return (
    <Layout>
      <div>
        <div className={styles.courseHeader}>
          <Row className="align-items-center">
            <Col lg={5}>
              <div className={styles.pageBAnnerText}>
                <h4>ডিজাইন আর রঙের খেলায় ক্যারিয়ার গড়তে </h4>
                <h2>প্রফেশনাল গ্রাফিক ডিজাইন </h2>
                <ul>
                  <li>
                    কোর্সের মেয়াদ <span>৬ মাস</span>
                  </li>
                  <li>
                    লেকচার <span>৪৮ টি</span>
                  </li>
                  <li>
                    প্রজেক্ট <span>৩০+</span>
                  </li>
                </ul>

                <div className={styles.courseArticle}>
                  <p>
                    ভিজ্যুয়াল কনটেন্টের চাহিদা বেড়ে যাওয়ায় এখন মার্কেটাররা
                    গ্রাফিক্যাল কনটেন্টের দিকে ঝুঁকেছেন। তাই বিশ্বজুড়ে গ্রাফিক
                    ডিজাইনারদের চাহিদা এখন আকাশচুম্বী। এক জরিপে দেখা যায়, ভালো
                    একটা লোগোর জন্য একটি ছোট প্রতিষ্ঠানও ৫০০ ডলার পর্যন্ত খরচ
                    করে। আপনি কি ডিজাইনের কাজ করতে ভালোবাসেন? তাহলে আপডেটেড
                    মডিউলে দক্ষ প্রশিক্ষকের সাথে আমাদের গ্রাফিক ডিজাইন কোর্সটি
                    আপনার জন্যই।
                  </p>
                </div>
                <div className={styles.pageBannerButton}>
                  <a href="#">ভর্তি</a>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className={styles.pageBAnnerImage}>
                <Image src={courseImg} alt="courseImg Logo "></Image>
              </div>
            </Col>
          </Row>
        </div>
        <div className="pg_course_overviwe">
          <Row>
            <Col lg={6}>
              <div className="courseOverviewText">
                <h3> কোর্স ওভারভিউ </h3>
                <div className="course_overview_article">
                  <p>
                    একজন সফল গ্রাফিক ডিজাইনার হতে হলে মানসম্পন্ন কারিকুলামে
                    প্রশিক্ষণের পাশাপাশি প্রজেক্ট ভিত্তিক কাজের অভিজ্ঞতা আর
                    মার্কেটপ্লেস সম্পর্কে ভালো ধারণা থাকা প্রয়োজন । তাই এসব
                    কিছুই একসাথে অন্তর্ভুক্ত করা হয়েছে আমাদের কোর্স মডিউলে।
                    গ্রাফিক ডিজাইন কোর্স থেকে আপনি অ্যাডোবি ফটোশপ আর অ্যাডোবি
                    ইলাস্ট্রেটর ব্যবহার করে যেকোনো বিজ্ঞাপন, ব্যানার, টি-শার্ট
                    ডিজাইন, প্রোডাক্ট ডিজাইন করতে শিখবেন। তাছাড়াও প্রজেক্ট
                    ভিত্তিক কাজের জন্য পাচ্ছেন আধুনিক ল্যাব ব্যবহারের সুযোগ।
                    এভাবে কোর্সটি শেষ করলে, আপনার বাস্তব কাজের অভিজ্ঞতা থাকবে,
                    যা মার্কেটপ্লেসে দ্রুত সফলতা অর্জনে সহায়ক হবে। তাই আর দেরি
                    কেনো? গ্রাফিক ডিজাইনের সার্টিফাইড কোর্সে এনরোল করতে আজই বেছে
                    নিন ক্রিয়েটিভ আইটি ইনস্টিটিউট -এর professional Graphic
                    Design course
                  </p>
                </div>
              </div>
              
            </Col>
            <Col  lg={6}>
            <div className={styles.pgc_curriculum}>
                <h3>কোর্স কারিকুলাম </h3>
                <ul className={styles.curriculmList}>
    <li> <FaCheck/> Professional Presentation </li>
    <li> <FaCheck/> Professional Presentation </li>
    <li> <FaCheck/> Professional Presentation </li>
    <li> <FaCheck/> Professional Presentation </li>
    <li> <FaCheck/> Professional Presentation </li>
    <li> <FaCheck/> Professional Presentation </li>
    <li> <FaCheck/> Professional Presentation </li>
    <li> <FaCheck/> Professional Presentation </li>
    <li> <FaCheck/> Professional Presentation </li>
    <li> <FaCheck/> Professional Presentation </li>
    <li> <FaCheck/> Professional Presentation </li>
    <li> <FaCheck/> Professional Presentation </li>
    <li> <FaCheck/> Professional Presentation </li>
                </ul>
              </div></Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
}
