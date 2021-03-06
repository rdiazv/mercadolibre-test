import React from 'react'
import { NextPage } from 'next'
import SearchResults from 'src/components/SearchResults'
import PageContent from 'src/components/PageContent'
import fetch from 'isomorphic-unfetch'
import getQueryKey from 'src/helpers/getQueryKey'
import absoluteUrl from 'next-absolute-url'
import { ApiSearch } from 'src/types/api'
import Head from 'next/head'
import PageMessage from 'src/components/PageMessage'

type Props = {
  results: ApiSearch
  search: string
}

const Items: NextPage<Props> = ({ results, search }: Props) => {
  if (results.items.length === 0 && search) {
    return (
      <PageMessage>
        <h4>No hay publicaciones que coincidan con tu búsqueda.</h4>
        <ul>
          <li>Revisa la ortografía de la palabra.</li>
          <li>Utiliza palabras más genéricas o menos palabras.</li>
        </ul>
      </PageMessage>
    )
  }

  if (results.items.length === 0 && !search) {
    return (
      <PageMessage>
        <h4>Escribe en el buscador lo que quieres encontrar.</h4>
        <ul>
          <li>
            Escribe tu búsqueda en el campo que figura en la parte superior de
            la pantalla.
          </li>
        </ul>
      </PageMessage>
    )
  }

  return (
    <PageContent
      hierarchy={results.categories}
      itemScope
      itemType="http://schema.org/SearchResultsPage"
    >
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
}

Items.getInitialProps = async ({ req, query }) => {
  const { origin } = absoluteUrl(req)
  const search = getQueryKey(query, 'search')
  const response = await fetch(`${origin}/api/items?q=${search}`)
  const results = await response.json()

  return { results, search }
}

export default Items
