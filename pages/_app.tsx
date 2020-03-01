import React from 'react'
import { NextComponentType } from 'next'
import { AppContext, AppProps, AppInitialProps } from 'next/app'
import getQueryKey from '~/helpers/getQueryKey'
import AppHeader from '~/components/AppHeader'
import Head from 'next/head'
import 'normalize.css'
import '~/theme/base.scss'

type Props = AppProps & {
  search: string
}

const App: NextComponentType<AppContext, AppInitialProps, Props> = ({
  Component,
  pageProps,
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
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
    </Head>

    <AppHeader search={search} />
    <Component {...pageProps} />
  </div>
)

App.getInitialProps = async ({ Component, ctx }) => ({
  pageProps: (await Component.getInitialProps?.(ctx)) ?? Promise.resolve({}),
  search: getQueryKey(ctx.query, 'search'),
})

export default App
