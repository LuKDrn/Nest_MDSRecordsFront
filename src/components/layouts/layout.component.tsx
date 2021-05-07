// https://github.com/gatsbyjs/gatsby/blob/master/examples/using-typescript/src/components/layout.tsx

import * as React from "react"

import { rhythm } from "../../utils/typography";

const Layout: React.FC = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      marginBottom: rhythm(1.5),
      marginTop: rhythm(1.5),
      maxWidth: 650,
      paddingLeft: rhythm(3 / 4),
      paddingRight: rhythm(3 / 4),
    }}
  >
    {children}
  </div>
)

export default Layout