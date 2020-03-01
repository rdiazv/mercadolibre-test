import React, { Fragment } from 'react'
import './Breadcrumb.scss'

type Props = {
  hierarchy: string[]
}

const Breadcrumb = ({ hierarchy }: Props) => (
  <ul className="Breadcrumb">
    {hierarchy
      .map((segment, index) => <li key={index}>{segment}</li>)
      .reduce((current, segment, index) => (
        <Fragment key={index}>
          {[current, <li key={`separator-${index}`}> · </li>, segment]}
        </Fragment>
      ))}
  </ul>
)

export default Breadcrumb
