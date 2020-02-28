import React from 'react'
import classNames from 'classnames'
import './PageContent.scss'

const PageContent = ({
  className,
  children,
  ...props
}: React.HTMLProps<HTMLDivElement>) => (
  <main {...props} className={classNames('PageContent', className)}>
    <div className="PageContent__body">{children}</div>
  </main>
)

export default PageContent
