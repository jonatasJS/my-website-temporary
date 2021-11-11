import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

import '../styles/globals.css';
import '../styles/global.ts';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

import ButtonMovePage from "../components/ButtonMovePage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <link rel="icon" href={"/next-rocket-logo.png" || "https://i.imgur.com/XG63jgi.png"} />
      </Head>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate='pageAnimate'
        variants={{
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1
          }
        }}
      exit={{
        opacity: 0
      }}
      >
        <Script
          async
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script
          id=""
          strategy="lazyOnload"
        >
          {`
          window.dataLayer = window.dataLayer || [];

          function gtag(){
            dataLayer.push(arguments)
          }

          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
        </Script>
        <Navbar />
        {/* <ChangeLanguage /> */}
        <ButtonMovePage />

        <Component {...pageProps} />

        <Footer />
      </motion.div>
    </ThemeProvider>
  )
}

export default MyApp;
