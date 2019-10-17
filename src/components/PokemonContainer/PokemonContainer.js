import React from 'react'
import { Link } from 'react-router-dom'
import {
  string,
  number,
  arrayOf,
  object
} from 'prop-types'
import {
  Wrapper,
  Topbar,
  TopbarList,
  TopbarItem,
  Back,
  Content,
  Presentation,
  Information,
  PresentationInfo,
  BasicInfo,
  TypeInfo,
  Mugshot,
  Id,
  Name,
  Japanese,
  Types,
  ImageContainer,
  PokemonImage,
  InfoMenu,
  InfoItem,
  InfoContainer,
  FlavorText,
  AnatomicInfo
} from './PokemonContainer.style'

const PokemonContainer = ({
  name,
  id,
  japanese,
  types,
  flavorText,
  height,
  weight
}) => (
  <Wrapper type={types && types[0] && types[0].type.name}>
    <Topbar>
      <Back>
        <Link to='/'>PKMN</Link>
      </Back>
      <TopbarList>
        {id !== 1
          && (
          <TopbarItem>
            <Link to={`/pokemon/${id - 1}`}>
              {id - 1}
            </Link>
          </TopbarItem>
          )}
        <TopbarItem current>{id}</TopbarItem>
        {id !== 151
          && (
          <TopbarItem>
            <Link to={`/pokemon/${id + 1}`}>
              {id + 1}
            </Link>
          </TopbarItem>
          )}
      </TopbarList>
    </Topbar>
    <Content>
      <Presentation>
        <PresentationInfo>
          <BasicInfo>
            <Id>#{id < 100 ? `0${id}` : id}</Id>
            <Name>{name}</Name>
          </BasicInfo>
          <TypeInfo>
            <Types>
              {types
              && types.map((item) => {
                const { type: { name: type } } = item
                return (
                  <img alt={type} src={require(`../../assets/types/${type}.png`)} />
                )
              })}
            </Types>
          </TypeInfo>
        </PresentationInfo>
        <Mugshot>
          <ImageContainer>
            <Japanese>{japanese}</Japanese>
            {id && <PokemonImage alt={name} src={require(`../../assets/pokemons/${id}.png`)} />}
          </ImageContainer>
        </Mugshot>
      </Presentation>
      <Information>
        <InfoMenu>
          <InfoItem>info</InfoItem>
          <InfoItem>abilites</InfoItem>
          <InfoItem>misc</InfoItem>
        </InfoMenu>
        <InfoContainer>
          <strong>Bio</strong>
          <FlavorText>{flavorText}</FlavorText>
          <AnatomicInfo>
            <strong>Height:</strong> <span>{(height / 10).toFixed(1)} m</span>
          </AnatomicInfo>
          <AnatomicInfo>
            <strong>Weight:</strong> <span>{(weight / 10).toFixed(1)} kg</span>
          </AnatomicInfo>
          <AnatomicInfo>
            <strong>Type:</strong>
            <span>{types
              && types.length > 1
              ? types.map((item, index) => {
                const { type: { name: type } } = item
                if (index !== 1) {
                  return `${type.charAt(0).toUpperCase() + type.slice(1)} and `
                }
                return type.charAt(0).toUpperCase() + type.slice(1)
              })
              : types.map((item) => {
                const { type: { name: type } } = item
                return type.charAt(0).toUpperCase() + type.slice(1)
              })}
            </span>
          </AnatomicInfo>
        </InfoContainer>
      </Information>
    </Content>
  </Wrapper>
)

PokemonContainer.defaultProps = {
  name: '',
  id: undefined,
  japanese: '',
  types: [],
  flavorText: '',
  height: undefined,
  weight: undefined
}

PokemonContainer.propTypes = {
  name: string,
  id: number,
  japanese: string,
  types: arrayOf(object),
  flavorText: string,
  height: number,
  weight: number
}

export default PokemonContainer
