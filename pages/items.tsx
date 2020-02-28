import React from 'react'
import { NextPage } from 'next'
import SearchResults from '~/components/SearchResults'
import results from './results.json'
import PageContent from '~/components/PageContent'

type Props = {}

const Items: NextPage<Props> = () => (
  <PageContent>
    <SearchResults results={results} />
  </PageContent>
)

export default Items
