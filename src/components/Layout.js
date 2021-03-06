import React from 'react'
import { element, shape } from 'prop-types'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

export const breakpoint = {
  mobile: '@media (min-width: 320px) and (max-width: 767px)',
  tablet: '@media (min-width: 768px) and (max-width: 1024px)'
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Barlow+Condensed&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,900&display=swap');

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  body {
    margin: 0;
    font-family: 'Barlow Condensed', sans-serif;
  }

  button {
    font-family: 'Barlow Condensed', sans-serif;
  }

  pokedex-card {
    font-family: 'Barlow Condensed', sans-serif;
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Layout = ({ children, theme }) => (
  <ThemeProvider theme={{ theme }}>
    <Wrapper>
      <GlobalStyle />
      {children}
    </Wrapper>
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
