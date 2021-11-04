import type { AppProps } from 'next/app';
import Script from 'next/script';
import { ThemeProvider } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

import '../styles/globals.css';
import '../styles/global.ts';

import ButtonMovePage from "../components/ButtonMovePage";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
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
    >
      <ThemeProvider>
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

        <ButtonMovePage />

        <Component {...pageProps} />
      </ThemeProvider>
    </motion.div>
  )
}

export default MyApp;
