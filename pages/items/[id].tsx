import React from 'react'
import { NextPage } from 'next'
import getQueryKey from '~/helpers/getQueryKey'

type Props = {
  id: string
}

const Item: NextPage<Props> = ({ id }: Props) => <main>Item {id}</main>

Item.getInitialProps = ({ query }) => ({
  id: getQueryKey(query, 'id'),
})

export default Item
