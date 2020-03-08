import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  string,
  number,
  arrayOf,
  object
} from 'prop-types'
import Info from '../Info'
import Abilities from '../Abilities'
import Misc from '../Misc'
import {
  Wrapper,
  Topbar,
  TopbarList,
  TopbarItem,
  Back,
  Content,
  Presentation,
  MobileInfo,
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
  InfoContainer
} from './PokemonContainer.style'

const PokemonContainer = ({
  name,
  id,
  japanese,
  types,
  flavorText,
  height,
  weight,
  abilities,
  genera,
  habitat
}) => {
  const [info, setInfo] = useState('info')
  const [effectEntries, setEffectEntries] = useState([])

  useEffect(() => {
    const entries = []

    abilities.map((item) => {
      const {
        ability: { url: abilityUrl }
      } = item

      fetch(abilityUrl)
        .then((res) => res.json())
        .then((res) => {
          entries.push(res.effect_entries[0].short_effect)
        })
        .catch((error) => console.error(error))
        .finally(() => {
          setEffectEntries(entries)
        })

      return item
    })
  }, [abilities])

  const infoChildrenCheck = (children) => {
    switch (children) {
      case 'abilities':
        return (
          <Abilities
            abilities={abilities}
            effectEntries={effectEntries}
          />
        )
      case 'misc':
        return (
          <Misc
            genera={genera}
            habitat={habitat}
            id={id}
          />
        )
      default:
        return (
          <Info
            flavorText={flavorText}
            height={height}
            weight={weight}
            types={types}
          />
        )
    }
  }

  return (
    <Wrapper type={types && types[0] && types[0].type.name}>
      <Topbar>
        <Back>
          <Link to='/'>PKMN</Link>
        </Back>
        <TopbarList>
          {(id !== 1 && !!id) ? (
            <TopbarItem>
              <Link to={`/pokemon/${id - 1}`}>{id - 1}</Link>
            </TopbarItem>
          ) : null}
          <TopbarItem current>{id}</TopbarItem>
          {(id !== 151 && !!id) ? (
            <TopbarItem>
              <Link to={`/pokemon/${id + 1}`}>{id + 1}</Link>
            </TopbarItem>
          ) : null}
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
                {types && types.map((item) => {
                  const { type: { name: type } } = item
                  return (
                    <img
                      alt={type}
                      src={`../../assets/types/${type}.png`}
                      key={`image-key_${type}`}
                    />
                  )
                })}
              </Types>
            </TypeInfo>
          </PresentationInfo>
          <MobileInfo>
            {infoChildrenCheck(info)}
          </MobileInfo>
          <Mugshot>
            <ImageContainer>
              <Japanese>{japanese}</Japanese>
              {id && (
                <PokemonImage
                  alt={name}
                  src={`../../assets/pokemons/${id}.png`}
                  key={`mugshot-key_${name}`}
                />
              )}
            </ImageContainer>
          </Mugshot>
        </Presentation>
        <Information>
          <InfoMenu>
            <InfoItem onClick={() => setInfo('info')}>info</InfoItem>
            <InfoItem onClick={() => setInfo('abilities')}>abilities</InfoItem>
            <InfoItem onClick={() => setInfo('misc')}>misc</InfoItem>
          </InfoMenu>
          <InfoContainer>{infoChildrenCheck(info)}</InfoContainer>
        </Information>
      </Content>
    </Wrapper>
  )
}

PokemonContainer.defaultProps = {
  name: '',
  id: undefined,
  japanese: '',
  types: [],
  flavorText: '',
  height: undefined,
  weight: undefined,
  abilities: [],
  genera: '',
  habitat: ''
}

PokemonContainer.propTypes = {
  name: string,
  id: number,
  japanese: string,
  types: arrayOf(object),
  flavorText: string,
  height: number,
  weight: number,
  abilities: arrayOf(object),
  genera: string,
  habitat: string
}

export default PokemonContainer
