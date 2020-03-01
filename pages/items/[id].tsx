import React from 'react'
import { NextPage } from 'next'
import getQueryKey from '~/helpers/getQueryKey'
import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'
import { ApiItem } from '~/types/api'

type Props = {
  item: ApiItem
}

const Item: NextPage<Props> = ({ item: { item } }: Props) => (
  <main>Item {item.id}</main>
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
