import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import ScrollToTop from "react-scroll-to-top";
import { FaArrowAltCircleUp } from 'react-icons/fa';


export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <Header/>
      <Container>{children}</Container>
      <Footer/>
      <ScrollToTop   component={<p style={{ color: "blue", fontWeight:"700", fontSize:"20px" }}><FaArrowAltCircleUp/></p>}/>

    </div>
  );
}