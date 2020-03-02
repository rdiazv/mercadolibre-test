import React from 'react'
import { NextPage } from 'next'
import PageMessage from 'src/components/PageMessage'

const Home: NextPage = () => (
  <PageMessage>
    <p>Escribe en el buscador lo que quieres encontrar.</p>
  </PageMessage>
)

export default Home
