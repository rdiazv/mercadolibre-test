import React, { ReactElement } from 'react'
import PageContent from 'src/components/PageContent'
import './PageMessage.scss'

type Props = {
  children: ReactElement
}

const PageMessage = ({ children }: Props) => (
  <PageContent>
    <div className="PageMessage">{children}</div>
  </PageContent>
)

export default PageMessage
