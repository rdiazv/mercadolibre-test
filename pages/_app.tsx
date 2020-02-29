import React from 'react'
import { NextComponentType } from 'next'
import { AppContext, AppProps, AppInitialProps } from 'next/app'
import getQueryKey from '~/helpers/getQueryKey'
import AppHeader from '~/components/AppHeader'
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
    <AppHeader search={search} />
    <Component {...pageProps} />
  </div>
)

App.getInitialProps = async ({ Component, ctx }) => ({
  pageProps: (await Component.getInitialProps?.(ctx)) ?? Promise.resolve({}),
  search: getQueryKey(ctx.query, 'search'),
})

export default App
