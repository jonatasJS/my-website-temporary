import React, { ReactElement } from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="pt-BR">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script async src="https://kit.fontawesome.com/3af35cbbff.js" crossOrigin="anonymous"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;