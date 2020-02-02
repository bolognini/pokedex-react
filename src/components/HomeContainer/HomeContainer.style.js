import styled from 'styled-components'
import { breakpoint } from '../Layout'

export const Wrapper = styled.div`
  padding: 64px;
  font-family: 'Barlow Condensed', sans-serif;
  background-color: #901010;

  ${breakpoint.mobile} {
    padding: 64px 0;
  }
`

export const SearchContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  grid-gap: 56px;
  margin-bottom: 80px;
`

export const Title = styled.h2`
  color: #FACC48;
  text-shadow: 3px 2px 0 #3663AD;
  font-weight: bold;
  font-size: 64px;
  text-align: center;
  margin: 0;
`

export const Pokedex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  justify-items: center;
  grid-row-gap: 20px;

  ${breakpoint.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`
