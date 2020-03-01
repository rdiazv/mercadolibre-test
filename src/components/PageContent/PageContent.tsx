import React from 'react'
import classNames from 'classnames'
import Breadcrumb from 'src/components/Breadcrumb'
import './PageContent.scss'

type Props = React.HTMLProps<HTMLDivElement> & {
  hierarchy?: string[]
}

const PageContent = ({ className, children, hierarchy, ...props }: Props) => (
  <main {...props} className={classNames('PageContent', className)}>
    {hierarchy && <Breadcrumb hierarchy={hierarchy} />}

    <div className="PageContent__body">{children}</div>
  </main>
)

export default PageContent
