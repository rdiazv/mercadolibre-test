import React, { Fragment } from 'react'
import './Breadcrumb.scss'

type Props = {
  hierarchy: string[]
}

const Breadcrumb = ({ hierarchy }: Props) => (
  <nav className="Breadcrumb">
    <ul>
      {hierarchy
        .map((segment, index) => <li key={index}>{segment}</li>)
        .reduce((current, segment, index) => (
          <Fragment key={index}>
            {[current, <li key={`separator-${index}`}> · </li>, segment]}
          </Fragment>
        ))}
    </ul>
  </nav>
)

export default Breadcrumb
