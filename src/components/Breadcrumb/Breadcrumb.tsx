import React, { Fragment } from 'react'
import './Breadcrumb.scss'

type Props = {
  hierarchy: string[]
}

const Breadcrumb = ({ hierarchy }: Props) => (
  <nav className="Breadcrumb">
    <ol
      itemProp="breadcrumb"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      {hierarchy
        .map((segment, index) => (
          <li
            key={index}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content={`${index + 1}`} />
            <div itemProp="item" itemScope itemType="http://schema.org/Thing">
              <span itemProp="name">{segment}</span>
            </div>
          </li>
        ))
        .reduce((current, segment, index) => (
          <Fragment key={index}>
            {[current, <li key={`separator-${index}`}> · </li>, segment]}
          </Fragment>
        ))}
    </ol>
  </nav>
)

export default Breadcrumb
