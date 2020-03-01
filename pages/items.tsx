import React from 'react'
import { NextPage } from 'next'
import SearchResults from '~/components/SearchResults'
import PageContent from '~/components/PageContent'
import fetch from 'isomorphic-unfetch'
import getQueryKey from '~/helpers/getQueryKey'
import absoluteUrl from 'next-absolute-url'
import { ApiSearch } from '~/types/api'
import Head from 'next/head'

type Props = {
  results: ApiSearch
}

const Items: NextPage<Props> = ({ results }: Props) => (
  <PageContent hierarchy={results.categories}>
    <Head>
      <title>{results.categories[0]} en Mercado Libre</title>
      <meta
        name="description"
        content={`Encuentra ${results.categories[0]} en Mercado Libre Chile. Descubre la mejor forma de comprar online.`}
        key="description"
      />
    </Head>

    <SearchResults results={results} />
  </PageContent>
)

Items.getInitialProps = async ({ req, query }) => {
  const { origin } = absoluteUrl(req)
  const response = await fetch(
    `${origin}/api/items?q=${getQueryKey(query, 'search')}`
  )
  const results = await response.json()

  return { results }
}

export default Items
