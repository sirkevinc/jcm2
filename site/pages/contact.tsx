/* eslint-disable react/no-unescaped-entities */

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Contact.module.css'
import ContactForm from '../components/ContactForm'
import Cover from "../images/contact_cover.jpg"

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact Us At Jangi Consulting" />
        <meta property="og:title" content="Contact - Jangi Consulting" />
        <meta property="og:description" content="Contact Us At Jangi Consulting" />
        <meta property="og:url" content="https://jangiconsulting.com/contact" />
        <meta property="og:type" content="website" />       
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header__container}>
            {/* <div className={styles.header__image}>
              <Image src={Cover} alt="cover" objectFit="cover" />
            </div> */}
            <section className={styles.header__contents}>
              <h1>We're Here</h1>
              <p>Our door is always open</p>
            </section>
          </header>
        <ContactForm />
      </main>
    </div>
  )
}
