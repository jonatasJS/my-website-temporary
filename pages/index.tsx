import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import ButtonMovePage from '../components/ButtonMovePage/instex';

import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    // <div className={styles.container}>
    <>
      <Head>
        <title>Next Rocket</title>
        <meta name="description" content="Create by Jonatas Souza Soares" />
        <link rel="icon" href="/next-rocket-logo.jpg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Em breve <Link href="https://discord.gg/D9SkzTZxrM">Next Rocket!</Link>
        </h1>

        <Link href="https://discord.gg/D9SkzTZxrM">
          <img
            className={styles.logo}
            // height="300rem"
            // width="300rem"
            src="/next-rocket-logo.jpg"
          />
        </Link>
      </main>

      <ButtonMovePage />

      <Footer />
    </>
  )
}

export default Home
