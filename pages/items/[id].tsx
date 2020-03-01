import React from 'react'
import { NextPage } from 'next'
import getQueryKey from '~/helpers/getQueryKey'
import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'
import { ApiItem } from '~/types/api'
import PageContent from '~/components/PageContent'
import ItemPage from '~/components/Item'
import Head from 'next/head'
import getPriceText from '~/helpers/getPriceText'

type Props = {
  item: ApiItem
}

const Item: NextPage<Props> = ({ item }: Props) => {
  const priceText = getPriceText(item.item.price)

  return (
    <PageContent hierarchy={item.categories}>
      <Head>
        <title>
          {item.item.title} - {priceText} en Mercado Libre
        </title>
        <meta
          name="description"
          content={`Cómpralo en Mercado Libre a ${priceText}${
            item.item.free_shipping ? ' - Envío gratis' : ''
          }. Encuentra más productos de ${item.categories.join(', ')}.`}
          key="description"
        />
      </Head>

      <ItemPage item={item} />
    </PageContent>
  )
}

Item.getInitialProps = async ({ req, query }) => {
  const { origin } = absoluteUrl(req)
  const response = await fetch(
    `${origin}/api/items/${getQueryKey(query, 'id')}`
  )
  const item = await response.json()

  return { item }
}

export default Item
