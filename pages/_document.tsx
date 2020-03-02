import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es">
        <Head />
        <body itemScope itemType="http://schema.org/WebSite">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
