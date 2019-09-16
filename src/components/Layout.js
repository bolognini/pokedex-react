import React, { Fragment } from 'react'
import Footer from './Footer'
import { createGlobalStyle, ThemeProvider } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Barlow+Condensed&display=swap');

  a {
    text-decoration: none;
  }

  body {
    background-color: #565362;
    margin: 0;
    font-family: 'Barlow Condensed', sans-serif;
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
        <Footer />
      </Fragment>
    </ThemeProvider>
  )
}

export default Layout