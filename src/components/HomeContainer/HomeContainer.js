import React from 'react'
import { element } from 'prop-types'
import Footer from '../Footer'
import {
  Wrapper,
  SearchContainer,
  Title,
  Pokedex
} from './HomeContainer.style'

const HomeContainer = ({ children, searchInput }) => (
  <>
    <Wrapper>
      <SearchContainer>
        <Title>Choose your Pokémon!</Title>
        {searchInput}
      </SearchContainer>
      <Pokedex>
        {children}
      </Pokedex>
    </Wrapper>
    <Footer />
  </>
)

HomeContainer.propTypes = {
  children: element.isRequired,
  searchInput: element.isRequired
}

export default HomeContainer
