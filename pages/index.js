import Head from 'next/head'
import Image from 'next/image'
import Aboutus from '../components/Aboutus/Aboutus'
import Contact from '../components/Contact/Contact'
import Courses from '../components/Courses/Courses'
import HeroArea from '../components/HeroArea/HeroArea'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>


      <div>
        
       <section  id='section_1'>
           <HeroArea/>
       </section>
       <section  id='section_2'>
          <Courses/>
       </section>
       <section  id='section_3'>
         <Aboutus/>
       </section>
       <section  id='section_5'>
       <Contact/>
       </section>
      

    </div>
    </Layout>
    
  )
}