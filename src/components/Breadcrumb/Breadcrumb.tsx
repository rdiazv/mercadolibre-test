import React, { Fragment } from 'react'
import Link from 'next/link'
import './Breadcrumb.scss'

type Props = {
  hierarchy: string[]
}

const Breadcrumb = ({ hierarchy }: Props) => {
  if (hierarchy.length === 0) {
    return null
  }

  return (
    <nav className="Breadcrumb">
      <ol itemScope itemType="https://schema.org/BreadcrumbList">
        {hierarchy
          .map((segment, index) => (
            <li
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={`${index + 1}`} />
              <Link href="/" passHref>
                <a itemProp="item" itemScope itemType="http://schema.org/Thing">
                  <span itemProp="name">{segment}</span>
                </a>
              </Link>
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
}

export default Breadcrumb
