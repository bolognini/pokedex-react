import React, { Fragment } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'


export const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css?family=Barlow+Condensed&display=swap');

  body {
    background-color: papayawhip;
  }

  pokedex-card {
    font-family: 'Barlow Condensed', sans-serif;
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