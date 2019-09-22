import React from 'react'
import { element, shape } from 'prop-types'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Footer from './Footer'


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

const Layout = ({ children, theme }) => (
  <ThemeProvider theme={{ theme }}>
    <>
      <GlobalStyle />
      {children}
      <Footer />
    </>
  </ThemeProvider>
)

Layout.defaultProps = {
  theme: undefined
}

Layout.propTypes = {
  children: element.isRequired,
  theme: shape({})
}

export default Layout
