import React from 'react'
import { NextPage } from 'next'
import getQueryKey from '~/helpers/getQueryKey'
import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'
import { ApiItem } from '~/types/api'
import PageContent from '~/components/PageContent'
import ItemPage from '~/components/Item'

type Props = {
  item: ApiItem
}

const Item: NextPage<Props> = ({ item }: Props) => (
  <PageContent>
    <ItemPage item={item} />
  </PageContent>
)

Item.getInitialProps = async ({ req, query }) => {
  const { origin } = absoluteUrl(req)
  const response = await fetch(
    `${origin}/api/items/${getQueryKey(query, 'id')}`
  )
  const item = await response.json()

  return { item }
}

export default Item
