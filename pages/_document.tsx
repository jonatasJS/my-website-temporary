import React, { ReactElement } from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';
import { ServerStyleSheet } from "styled-components";
import SitemapGenerator from 'sitemap-generator';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    SitemapGenerator('https://jonatas.app', {
      maxDepth: 0,
      filepath: './sitemap.xml',
      maxEntriesPerFile: 50000,
      stripQuerystring: true
    });

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): ReactElement {
    return (
      <Html lang="pt-BR">
        <Head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4515639184646084"
            crossOrigin="anonymous"></script>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
          />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
          />
          <meta property="og:locale" content="pt_BR"></meta>
          <meta property="og:url" content="https://jonatas.app"></meta>
          <meta property="og:title" content="Next Rocket - Crie seu site conosco" />
          <meta property="og:site_name" content="Next Rocket"></meta>
          <meta property="og:description" content="Venha criar um site pessoal ou para sua empresa com designs interativos."></meta>
          <meta property="og:image" content="https://jonatas.app/og_image.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />
          <meta name="google" content="nositelinkssearchbox" />
          <meta name="google" content="nopagereadaloud" />
          
        </Head>
        <body>
          {/* <Navbar /> */}
          <Main />
          <NextScript />
          <script async src="https://kit.fontawesome.com/3af35cbbff.js" crossOrigin="anonymous"></script>
          <script async src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" crossOrigin="anonymous"></script>
          <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=6e248851-305b-406f-b9c6-582efcb336ab"> </script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
