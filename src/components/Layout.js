import React, { Fragment } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'


export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: papayawhip;
  }
`

const Layout = ({ children, theme }) => {
  return (
    <ThemeProvider theme={{theme}}>
      <Fragment>
        <GlobalStyle />
        {children}
      </Fragment>
    </ThemeProvider>
  )
}

export default Layout