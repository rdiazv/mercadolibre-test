import React from 'react'
import SearchForm from 'src/components/SearchForm'
import { useMediaQuery } from 'react-responsive'
import logoUrl from './logo.png'
import largeLogoUrl from './logo_large.png'
import Link from 'next/link'
import './AppHeader.scss'

type Props = {
  search?: string
}

const AppHeader: React.FC<Props> = ({ search }: Props) => {
  const isXS = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <header className="AppHeader" role="banner">
      <div className="AppHeader__body">
        <Link href="/" passHref>
          <a className="AppHeader__logo">
            {isXS ? (
              <img src={logoUrl} alt="Mercado Libre" width={39} height={28} />
            ) : (
              <img
                src={largeLogoUrl}
                alt="Mercado Libre"
                width={134}
                height={34}
              />
            )}
          </a>
        </Link>

        <SearchForm className="AppHeader__SearchForm" defaultValue={search} />
      </div>
    </header>
  )
}

export default AppHeader
