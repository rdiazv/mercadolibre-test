import React from 'react'
import SearchForm from '~/components/SearchForm'
import logoUrl from './logo.png'
import './AppHeader.scss'

type Props = {
  search?: string
}

const AppHeader: React.FC<Props> = ({ search }: Props) => (
  <header className="AppHeader">
    <a href="/" className="AppHeader__logo">
      <img src={logoUrl} width={39} height={28} />
    </a>

    <SearchForm className="AppHeader__SearchForm" defaultValue={search} />
  </header>
)

export default AppHeader
