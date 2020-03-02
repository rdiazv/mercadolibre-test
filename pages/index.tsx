import React from 'react'
import { NextPage } from 'next'
import PageMessage from 'src/components/PageMessage'

const Home: NextPage = () => (
  <PageMessage>
    <h4>Escribe en el buscador lo que quieres encontrar.</h4>
    <ul>
      <li>
        Escribe tu búsqueda en el campo que figura en la parte superior de la
        pantalla.
      </li>
    </ul>
  </PageMessage>
)

export default Home
