import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import ButtonMovePage from '../components/ButtonMovePage/index';
import Services from '../components/Services/index';
import { I18n } from '../translate/i18n';

import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  async function handleClick(lang: string) {

    console.log(lang);
    await localStorage.setItem('i18nextLng', `${lang}`);
    return window.location = window.location;
  }

  return (
    // <div className={styles.container}>
    <>
      <Head>
        <title>Next Rocket</title>
        <meta name="description" content="Create by Jonatas Souza Soares" />
        <link rel="icon" href="/next-rocket-logo.jpg" />
      </Head>
      
      <ButtonMovePage />
      
      <main className={styles.main}>
        <div className={styles.language}>
          <h1 className={styles.titleSmaller}>{I18n.t('language')}</h1>
          <div className={styles.content}>
            <button onClick={() => handleClick('pt-BR')}>
              <Image
                src={`https://lipis.github.io/flag-icon-css/flags/4x3/br.svg`}
                alt="Picture of the author"
                width={40}
                height={40}
                title="Português"
              />
            </button>

            <button onClick={() => handleClick('en-US')}>
              <Image
                src={`https://lipis.github.io/flag-icon-css/flags/4x3/us.svg`}
                alt="Picture of the author"
                width={40}
                height={40}
                title="English"
              />
            </button>
          </div>
        </div>

        {/* <select value={selectedOption} onChange={handleSelect}>
          <option>{I18n.t('language')}</option>
          <option value="pt-BR">Português</option>
          <option value="en-US">English</option>
        </select> */}

        <h1 className={styles.title}>
          {I18n.t('titles.app')} <Link href="https://discord.gg/D9SkzTZxrM">Next Rocket!</Link>
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

      {/* <Services /> */}

      <Footer />
    </>
  )
}

export default Home
