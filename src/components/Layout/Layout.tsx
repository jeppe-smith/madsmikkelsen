import React, { SFC } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../Header'

const Layout: SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <main>
        <Header />
        {children}
      </main>
    )}
  />
)

export default Layout
