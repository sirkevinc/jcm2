/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import Cover from "../images/about_cover.jpg"
import TeamCard from '../components/TeamCard'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="About Us At Jangi Consulting" />
        <meta property="og:title" content="About - Jangi Consulting" />
        <meta property="og:description" content="About Us At Jangi Consulting" />
        <meta property="og:url" content="https://jangiconsulting.com/about" />
        <meta property="og:type" content="website" />       
         <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.header__container}>
          {/* <div className={styles.header__image}>
            <Image src={Cover} alt="cover" objectFit="cover" />
          </div> */}
          <div className={styles.header__contents}>
            <h2>About Us</h2>
            <p>We're centered on what's best for you and your business</p>
            <p>We strive to be a partner to businesses big and small, providing the professional prowess you need to chart your path forward. It’s all part of our mission: To deliver an unmatched experience you won’t get anywhere else.</p>
          </div>
        </section>
        <div className={styles.about__container}>
          <section className={styles.about__content}>
            <h2>Meet our Team</h2>
            <h4>Passionate and purposeful, our consultants bring deep and diverse skillsets with a desire to dig in and do the work, no matter what — measuring success by results, not promises.</h4>
            <TeamCard />
          </section>
        </div>
      </main>
    </div>
  )
}
