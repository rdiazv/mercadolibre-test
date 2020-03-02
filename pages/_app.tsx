import React from 'react'
import { NextComponentType } from 'next'
import { AppContext, AppProps, AppInitialProps } from 'next/app'
import getQueryKey from 'src/helpers/getQueryKey'
import AppHeader from 'src/components/AppHeader'
import absoluteUrl from 'next-absolute-url'
import Head from 'next/head'
import OriginContext from 'src/components/OriginContext'
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
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        key="viewport"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>

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
