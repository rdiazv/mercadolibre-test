import React from 'react'
import SearchForm from '../src/components/SearchForm'
import { NextComponentType } from 'next'
import { AppContext, AppProps, AppInitialProps } from 'next/app'
import '../src/theme/base.scss'
import getQueryKey from '../src/helpers/getQueryKey'

type Props = AppProps & {
  search: string
}

const App: NextComponentType<AppContext, AppInitialProps, Props> = ({
  Component,
  pageProps,
  search,
}: Props) => (
  <div>
    <SearchForm defaultValue={search} />
    <Component {...pageProps} />
  </div>
)

App.getInitialProps = ({ Component, ctx }) => ({
  pageProps: Component.getInitialProps?.(ctx) ?? {},
  search: getQueryKey(ctx.query, 'search'),
})

export default App
