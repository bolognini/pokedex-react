import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 64px;
  font-family: 'Barlow Condensed', sans-serif;
`

export const SearchContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  grid-gap: 56px;
  margin-bottom: 80px;
`

export const Title = styled.h2`
  color: #FFC90A;
  font-weight: bold;
  font-size: 64px;
  text-align: center;
  margin: 0;
`

export const SearchInput = styled.input`
  width: 50%;
  padding-bottom: 8px;
  justify-self: center;
  border: none;
  background: none;
  border-bottom: 1px solid #E5E5E5;
  text-align: center;
  font-size: 24px;
  font-style: italic;
  font-weight: lighter;
  color: #E5E5E5;

  &::placeholder {
    color: #E5E5E5;
  }
`

export const Pokedex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  justify-items: center;
  grid-row-gap: 20px;
`