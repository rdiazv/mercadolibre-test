import React from 'react'
import classnames from 'classnames'
import searchIconUrl from './search.png'
import './SearchForm.scss'

type Props = {
  defaultValue?: string
  className?: string
}

const SearchForm: React.FC<Props> = ({ className, defaultValue }: Props) => (
  <form
    method="GET"
    action="/items"
    className={classnames('SearchForm', className)}
  >
    <input
      className="SearchForm__input"
      name="search"
      type="search"
      placeholder="Nunca dejes de buscar"
      defaultValue={defaultValue}
    />

    <button type="submit" className="SearchForm__submit">
      <div className="SearchForm__iconContainer">
        <img src={searchIconUrl} width={18} height={18} />
      </div>
    </button>
  </form>
)

export default SearchForm
