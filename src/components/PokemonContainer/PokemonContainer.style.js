import styled, { keyframes } from 'styled-components'
import { breakpoint } from '../Layout'

export const Wrapper = styled.main`
  min-height: 100vh;
  padding: 16px;
  background-color:
    ${(props) => {
    if (props.type === 'poison') {
      return '#642065'
    } if (props.type === 'ghost') {
      return '#715799'
    }
    if (props.type === 'bug') {
      return '#5F690A'
    }
    if (props.type === 'fighting') {
      return '#71201C'
    }
    if (props.type === 'flying') {
      return '#8763EF'
    }
    if (props.type === 'psychic') {
      return '#882C48'
    }
    if (props.type === 'fire') {
      return '#CA5400'
    }
    if (props.type === 'ice') {
      return '#499C9C'
    }
    if (props.type === 'ground') {
      return '#A07C1A'
    }
    if (props.type === 'water') {
      return '#2E63E0'
    }
    if (props.type === 'dragon') {
      return '#371292'
    }
    if (props.type === 'grass') {
      return '#346919'
    }
    if (props.type === 'dark') {
      return '#6f5747'
    }
    if (props.type === 'steel') {
      return '#515173'
    }
    if (props.type === 'electric') {
      return '#C3B236'
    }
    if (props.type === 'rock') {
      return '#46412D'
    }
    if (props.type === 'fairy') {
      return '#CE5D6D'
    }
    return '#737373'
  }};
`

export const Topbar = styled.div`
  display: flex;
  justify-content: center;
`

export const atention = keyframes`
  0% {
    transform: scale(1) rotate(7deg);
  }

  50% {
    transform: scale(1.5) rotate(7deg);
  }

  100% {
    transform: scale(1.15) rotate(7deg);
  }
`

export const Back = styled.div`
  position: absolute;
  top: 3%;
  left: 5%;
  font-size: 36px;
  color: #FACC48;
  text-shadow: 3px 2px 0 #3663AD;
  transition: all 120ms;

  &:hover {
    animation: ${atention} 0.15s ease;
    animation-fill-mode: forwards;
    transition: all 120ms;
  }

  ${breakpoint.mobile} {
    display: none;
  }
`

export const TopbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 24px 0 32px 0;

  ${breakpoint.mobile} {
    display: none;
  }
`

export const TopbarItem = styled.li`
  margin: 0 24px;
  color: #E5E5E5;
  font-size: ${(props) => (props.current ? '36px' : '24px')};
  ${(props) => !props.current && `
    &:hover {
      color: #2F2D3B;
      transition: .2s linear;
    }
  `}

  a {
    padding: 0 16px;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 24px;
  padding: 0 80px;

  ${breakpoint.mobile} {
    grid-template: none;
    padding: 0;
    height: 100%;
  }
`

export const Presentation = styled.div`
  ${breakpoint.mobile} {
    display: grid;
    grid-template-rows: 76px 1fr;
  }
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 64px;

  ${breakpoint.mobile} {
    display: none;
  }
`

export const PresentationInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakpoint.mobile} {
    display: grid;
    grid-template-columns: 0.4fr 1fr;
    align-items: end;
  }
`

export const MobileInfo = styled.div`
  display: none;
  color: #E5E5E5;

  ${breakpoint.mobile} {
    display: block;
  }
`

export const BasicInfo = styled.div``

export const TypeInfo = styled.div``

export const Id = styled.p`
  font-size: 24px;
  color: #E5E5E5;
`

export const Name = styled.h2`
  font-size: 64px;
  font-weight: bold;
  text-transform: capitalize;
  color: #E5E5E5;

  ${breakpoint.mobile} {
    font-size: 40px;
    margin-right: 16px;
  }
`

export const Mugshot = styled.div``

export const Japanese = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 114px;
  opacity: 0.4;
  position: absolute;

  ${breakpoint.mobile} {
    font-size: 36px;
    position: unset;
  }
`

export const Types = styled.div`
  display: flex;
  padding: 0 56px 4px 0;

  img {
    ${breakpoint.mobile} {
      height: 100%;
      width: 20%;
    }
  }
`

export const ImageContainer = styled.div`
  ${breakpoint.mobile} {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`

export const PokemonImage = styled.img`
  float: right;
  max-height: 65vh;

  ${breakpoint.mobile} {
    max-height: 48vh;
    max-width: 88vw;
  }
`

export const InfoMenu = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`

export const InfoItem = styled.li`
  background-image: linear-gradient(transparent 0%, transparent 60%, #2F2D3B 60%, #2F2D3B 100%);
  transition: all 0.4s;
  box-shadow: inset 0 0 0 #2F2D3B;
  padding: 8px;
  margin-right: 32px;
  font-size: 36px;
  color: #E5E5E5;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 -100px 0 #2F2D3B;
    transition: all 0.4s;
    box-sizing: border-box;
  }
`

export const InfoContainer = styled.div`
  margin-top: 64px;
  padding-right: 24px;
  color: #E5E5E5;
  max-height: 400px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
    background-color: #2F2D3B;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #E5E5E5;
  }

  strong {
    font-weight: bold;
    font-size: 24px;
  }

  span {
    font-size: 18px;
  }
`
