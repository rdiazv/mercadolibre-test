import React from 'react'
import classNames from 'classnames'
import './PageContent.scss'

const PageContent = ({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) => (
  <main {...props} className={classNames('PageContent', className)} />
)

export default PageContent
