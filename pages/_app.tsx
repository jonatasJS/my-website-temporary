import type { AppProps } from 'next/app';
import Script from 'next/script';
import { ThemeProvider } from '../contexts/ThemeContext';

import '../styles/globals.css';
import '../styles/global.ts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;
