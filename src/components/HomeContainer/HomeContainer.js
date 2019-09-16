import React from 'react'
import {
  Wrapper,
  SearchContainer,
  Title,
  SearchInput,
  Pokedex
} from './HomeContainer.style'

const HomeContainer = ({ children }) => {
  return (
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
}

export default HomeContainer