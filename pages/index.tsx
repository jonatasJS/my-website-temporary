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

      <main className="services">
        <div className="row justify-content-center row-50">
          <div className="col-sm-10 col-md-8 col-lg-12">
            <div className="row justify-content-center row-50">
              <div className="col-sm-6 col-lg-3">
                <article className="box-modern box-modern-sm wow clipInDown" data-anime="circles-2" data-wow-delay=".1s" style={{visibility: "visible", animationDelay: "0.1s", animationName: "clipInDown"}}>
                  <div className="box-modern-media">
                    <div className="box-modern-icon linearicons-smartphone"></div>
                  </div>
                  <p className="box-modern-title">Aplicativos Para Android</p>
                  <div className="box-modern-text">
                    <p>Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus.</p>
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-3">
                <article className="box-modern box-modern-sm box-modern_alternate-1 wow clipInDown" data-anime="circles-1" data-wow-delay=".2s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "clipInDown"}}>
                  <div className="box-modern-media">
                    <div className="box-modern-icon linearicons-cloud-sync"></div>
                  </div>
                  <p className="box-modern-title">Aplicações Web</p>
                  <div className="box-modern-text">
                    <p>Venenatis tellus in metus vulputate eu scelerisque felis n hendrerit.</p>
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-3">
                <article className="box-modern box-modern-sm wow clipInDown" data-anime="circles-1" data-wow-delay=".3s" style={{visibility: "visible", animationDelay: "0.3s", animationName: "clipInDown"}}>
                  <div className="box-modern-media">
                    <div className="box-modern-icon linearicons-headset"></div>
                  </div>
                  <p className="box-modern-title"></p>
                  <div className="box-modern-text">
                    <p>Urna duis convallis convallis tellus id interdum velit laoreet id integer quis.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Home
