import React from 'react'
import { NextPage } from 'next'
import getQueryKey from '~/helpers/getQueryKey'

type Props = {
  id: number
}

const Item: NextPage<Props> = ({ id }: Props) => <main>Item {id}</main>

Item.getInitialProps = ({ query }) => ({
  id: parseInt(getQueryKey(query, 'id'), 10),
})

export default Item
