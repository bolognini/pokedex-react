import React from 'react'
import { element } from 'prop-types'
import {
  Wrapper,
  SearchContainer,
  Title,
  SearchInput,
  Pokedex
} from './HomeContainer.style'

const HomeContainer = ({ children }) => (
  <Wrapper>
    <SearchContainer>
      <Title>Choose your Pokémon!</Title>
      <SearchInput type='text' placeholder='search by name or number' />
    </SearchContainer>
    <Pokedex>
      {children}
    </Pokedex>
  </Wrapper>
)

HomeContainer.propTypes = {
  children: element.isRequired
}

export default HomeContainer
