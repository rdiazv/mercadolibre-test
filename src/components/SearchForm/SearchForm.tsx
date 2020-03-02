import React, { useContext } from 'react'
import classnames from 'classnames'
import searchIconUrl from './search.png'
import './SearchForm.scss'
import OriginContext from 'src/components/OriginContext'

type Props = {
  defaultValue?: string
  className?: string
}

const SearchForm: React.FC<Props> = ({ className, defaultValue }: Props) => {
  const origin = useContext(OriginContext)

  return (
    <form
      method="GET"
      action="/items"
      className={classnames('SearchForm', className)}
      role="search"
      itemProp="potentialAction"
      itemScope
      itemType="http://schema.org/SearchAction"
    >
      <meta itemProp="target" content={`${origin}/items?search={search}`} />

      <label>
        <span className="hide-visually">Buscar</span>

        <input
          className="SearchForm__input"
          name="search"
          type="search"
          placeholder="Nunca dejes de buscar"
          defaultValue={defaultValue}
          autoComplete="off"
          aria-label="Ingresa lo que quieras encontrar"
          itemProp="query-input"
        />
      </label>

      <button type="submit" className="SearchForm__submit" aria-label="Buscar">
        <div className="SearchForm__iconContainer">
          <img src={searchIconUrl} width={18} height={18} alt="Buscar" />
        </div>
      </button>
    </form>
  )
}

export default SearchForm
