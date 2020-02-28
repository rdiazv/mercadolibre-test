import React from 'react'
import { NextPage } from 'next'
import SearchResults from '~/components/SearchResults'
import results from './results.json'

type Props = {}

const Items: NextPage<Props> = () => (
  <main>
    <SearchResults results={results} />
  </main>
)

export default Items
