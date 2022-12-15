/* eslint-disable react/no-unescaped-entities */

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import WhatCard from "../components/WhatCard"

import Cover from "../images/home_cover.jpg"
import Link from "next/link"
import { Button } from '@mui/material'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jangi Consulting & Management</title>
        <meta name="description" content="Small Business Consulting Services" />
        <meta property="og:title" content="Jangi Consulting" />
        <meta property="og:description" content="Small Business Consulting Services" />
        <meta property="og:url" content="https://jangiconsulting.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className={styles.header__container}>
          {/* <div className={styles.header__image}> */}
            {/* <Image src={Cover} alt="cover" sizes="fill" priority /> */}
          {/* </div> */}
          <section className={styles.header__contents}>
            <h1>Business Advisory <br /> Services Provider</h1>
            <p>Together we can envision, inspire and transform your business</p>
            <Button href="/about" component={Link} sx={{ width: "170px" }} variant="contained" aria-label="Learn More About Us">
              Learn About Us
            </Button>
          </section>
        </header>
          <section className={styles.home__section}>
            <div className={styles.home__section_header}>
              <h2>What We Do</h2>
              <p>Digital, business and technology consulting centered on you</p>
            </div>
              <section className={styles.home__cards_container}>
                <div>
                <WhatCard 
                  title="Save money and Time" 
                  icon="work"
                  content="We can help you budget and increase business efficiency"
                  />
                </div>
                <div>
                <WhatCard 
                  title="Financial Services" 
                  icon="bank"
                  content="We work to develop and implement clear action plans"
                  />
                </div>
                <div>
                <WhatCard 
                  title="Business & Finances" 
                  icon="business"
                  content="Our key financial insights can help you achieve your goals"
                  />
                  </div>
                </section>
          </section>
          <section className={`${styles.home__section} ${styles.approach__section}`}>
            <section className={styles.home__section_header}>
              <h2>Our Approach</h2>
            </section>
              <div className={styles.approach}>
                  <h4>What We Stand For</h4>
                  <p>We are committed to helping you reach your goals and we’ll be with you every step of the way.</p>
              </div>
              <div className={styles.approach}>
                  <h4>What We Value</h4>
                  <p>We believe in working together to do good work and serve those around us.</p>
              </div>
              <div className={styles.approach}>
                  <h4>Why We're Here</h4>
                  <p>We’re deeply committed to everything we do and it shows in the quality of our work.</p>
              </div>
          </section>
          <section className={styles.home__contact}>
            <text>
              <h4>Consult Us For Your Business</h4>
              <p>We'd love to hear from you!</p>
            </text>
            <Button href="/contact" component={Link} sx={{ width: "150px" }}variant="contained">Contact Us</Button>
          </section>
      </main>
    </div>
  )
}
