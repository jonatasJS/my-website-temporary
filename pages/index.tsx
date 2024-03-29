import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion"
import SideAd from "../components/SideAd"
// import { Helmet } from 'react-helmet';

// import Services from '../components/Services/index';
import { I18n } from '../translate/i18n';

import styles from '../styles/Home.module.css';

interface DataUserTest {
  tag: string;
}

const Home: NextPage = () => {

  const data: Array<string | DataUserTest> = [
    "Site",
    "jonatas",
    "Next Rocket",
    "next rocket",
    "next",
    "rocket",
    "criar site",
    "criar sites",
  ]

  const styleAd = {
    // background: "black",
    width: "calc(100vw / 2)",
    height: 100,
    display: "flex",
    margin: "1rem"
  }

  return (
    // <div className={styles.container}>
    <>
      <Head>
        <title>Home | Next Rocket</title>
        <meta name="description" content="Next Rocket - Crie seu site conosco" />
        <meta name="keywords" content={`${data?.map(e => `${e}`)}`} />
      </Head>

      <main className={styles.main}>
        {/* <select value={selectedOption} onChange={handleSelect}>
          <option>{I18n.t('language')}</option>
          <option value="pt-BR">Português</option>
          <option value="en-US">English</option>
        </select> */}

        <h1 className={styles.title}>
          {I18n.t('titles.app')} <Link href="https://discord.gg/D9SkzTZxrM">Next Rocket!</Link>
        </h1>

        <Link href="https://discord.gg/D9SkzTZxrM">
          <a target="_blank">
            <motion.img
              whileHover={{
                position: "relative",
                zIndex: 8,
                scale: [1, 1.4, 1.2],
                transition: {
                  delay: .2
                }
              }}
              className={styles.logo}
              // height="300rem"
              // width="300rem"
              src="/next-rocket-logo.jpg"
            />
          </a>
        </Link>

        <SideAd />
      </main>
    </>
  )
}

export default Home;


// https://codepen.io/jh3y/pen/LYNZwGm?editors=1010
