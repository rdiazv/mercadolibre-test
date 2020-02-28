import React from 'react'

type Props = {
  defaultValue?: string
}

const SearchForm: React.FC<Props> = ({ defaultValue }: Props) => (
  <form method="GET" action="/items">
    <input
      name="search"
      type="text"
      placeholder="Nunca dejes de buscar"
      defaultValue={defaultValue}
    />
  </form>
)

export default SearchForm
