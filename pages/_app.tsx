import React from 'react'
import { NextComponentType } from 'next'
import { AppContext, AppProps, AppInitialProps } from 'next/app'
import getQueryKey from 'src/helpers/getQueryKey'
import AppHeader from 'src/components/AppHeader'
import absoluteUrl from 'next-absolute-url'
import Head from 'next/head'
import OriginContext from 'src/components/OriginContext'
import ReactTooltip from 'react-tooltip'
import 'normalize.css'
import 'src/theme/base.scss'

type Props = AppProps & {
  origin: string
  search: string
}

const App: NextComponentType<AppContext, AppInitialProps, Props> = ({
  Component,
  pageProps,
  origin,
  search,
}: Props) => (
  <div>
    <Head>
      <title>Mercado Libre</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="description"
        content="La comunidad de compra y venta online más grande de América Latina."
        key="description"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        key="viewport"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>

    <ReactTooltip effect="solid" />

    <OriginContext.Provider value={origin}>
      <AppHeader search={search} />
      <Component {...pageProps} />
    </OriginContext.Provider>
  </div>
)

App.getInitialProps = async ({ Component, ctx }) => ({
  origin: absoluteUrl(ctx.req).origin,
  pageProps: (await Component.getInitialProps?.(ctx)) ?? Promise.resolve({}),
  search: getQueryKey(ctx.query, 'search'),
})

export default App
