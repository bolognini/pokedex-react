import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.main`
  height: 100vh;
  background-color: ${(props) => {
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
  }}};
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
  color: #facc48;
  text-shadow: 3px 2px 0 #3663ad;
  transition: all 120ms;

  &:hover {
    animation: ${atention} .15s ease;
    animation-fill-mode: forwards;
    transition: all 120ms;
  }
`

export const TopbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 24px 0 32px 0;
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
`

export const Presentation = styled.div`
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 64px;
`

export const PresentationInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`

export const Mugshot = styled.div`
`

export const Japanese = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 114px;
  opacity: 0.4;
  position: absolute;
`

export const Types = styled.div`
  display: flex;
  padding-right: 56px;
`

export const ImageContainer = styled.div`
  height: 50%;
  width: 60%;
`

export const PokemonImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  padding-left: 50%;
`

export const InfoMenu = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`

export const InfoItem = styled.li`
  background-image: linear-gradient(transparent 0%, transparent 60%, #2F2D3B 60%, #2F2D3B 100%);
  transition: all .4s;
  box-shadow: inset 0 0 0 #2F2D3B;
  padding: 8px;
  margin-right: 32px;
  font-size: 36px;
  color: #E5E5E5;

  &:hover {
    box-shadow: inset 0 -100px 0 #2F2D3B;
    transition: all .4s;
    box-sizing: border-box;
  }
`

export const InfoContainer = styled.div`
  padding-top: 64px;
  color: #E5E5E5;

  strong {
    font-weight: bold;
    font-size: 24px;
  }

  span {
    font-size: 18px;
  }
`

export const FlavorText = styled.div`
  padding: 24px 0 32px 0;
`

export const AnatomicInfo = styled.div`
  padding-bottom: 24px;
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  align-items: center;
`
