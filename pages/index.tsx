import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
// import { Helmet } from 'react-helmet';

// import Services from '../components/Services/index';
import { I18n } from '../translate/i18n';

import styles from '../styles/Home.module.css';

interface DataUserTest {
  tag: string;
}

interface PropsTest {
  children?: React.ReactNode;
  data?: Array<string | DataUserTest>;
}

const Home: NextPage = ({ data }: PropsTest) => {
  async function handleClick(lang: string) {

    await localStorage.setItem('i18nextLng', `${lang}`);
    return window.location = window.location;
  }

  return (
    // <div className={styles.container}>
    <>
      <Head>
        <title>Home | Next Rocket</title>
        <meta name="description" content="Create by Jonatas Souza Soares" />
        <meta name="keywords" content={`${data?.map(e => `${e}`)}`} />
        <link rel="icon" href={"/next-rocket-logo.png" || "https://i.imgur.com/XG63jgi.png"} />
      </Head>

      <main className={styles.main}>
        <div className={styles.language}>
          <h1 className={styles.titleSmaller}>{I18n.t('language')}</h1>
          <div className={styles.content}>
            <button onClick={() => handleClick('pt-BR')}>
              <Image
                src={`https://flagicons.lipis.dev/flags/4x3/br.svg`}
                alt="Picture of the author"
                width={40}
                height={40}
                title="Português"
              />
            </button>

            <button onClick={() => handleClick('en-US')}>
              <Image
                src={`https://flagicons.lipis.dev/flags/4x3/us.svg`}
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
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
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

  return {
    props: {
      data
    },
  }
}

export default Home;
