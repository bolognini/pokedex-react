import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  string, number, arrayOf, object
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
  Description,
  Topic,
  CaptalizeInfo,
  CryWrapper,
  Cry,
  CryButton
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
          entries.push(res.effect_entries[0].effect)
        })
        .catch((error) => console.error(error))
        .finally(() => {
          setEffectEntries(entries)
        })

      return item
    })
  }, [abilities])

  const Info = () => (
    <>
      <strong>Bio</strong>
      <Description>{flavorText}</Description>
      <Topic>
        <strong>Height:</strong> <span>{(height / 10).toFixed(1)} m</span>
      </Topic>
      <Topic>
        <strong>Weight:</strong> <span>{(weight / 10).toFixed(1)} kg</span>
      </Topic>
      <Topic>
        <strong>Type:</strong>
        <span>
          {types && types.length > 1
            ? types.map((item, index) => {
              const {
                type: { name: type }
              } = item
              if (index !== 1) {
                return `${type.charAt(0).toUpperCase() + type.slice(1)} and `
              }
              return type.charAt(0).toUpperCase() + type.slice(1)
            })
            : types.map((item) => {
              const {
                type: { name: type }
              } = item
              return type.charAt(0).toUpperCase() + type.slice(1)
            })}
        </span>
      </Topic>
    </>
  )

  const Abilities = () => (
    <>
      {abilities && abilities.map((item, index) => {
        const {
          ability: { name: abilityName }
        } = item
        return (
          <>
            <Topic>
              <strong>Name:</strong>{' '}
              <CaptalizeInfo>{abilityName}</CaptalizeInfo>
            </Topic>
            <Topic>
              <strong>Effect:</strong> <span>{effectEntries[index]}</span>
            </Topic>
          </>
        )
      })}
    </>
  )

  const Misc = () => (
    <>
      <Topic>
        <strong>Genera:</strong> <CaptalizeInfo>{genera}</CaptalizeInfo>
      </Topic>
      <Topic>
        <strong>Habitat:</strong> <CaptalizeInfo>{habitat}</CaptalizeInfo>
      </Topic>
      <Topic>
        <CryWrapper>
          Cry:
          <CryButton
            type='button'
            onClick={() => {
              const audio = document.querySelector('audio')
              return audio.play()
            }}
            onKeyPress={() => {
              const audio = document.querySelector('audio')
              return audio.play()
            }}
          />
        </CryWrapper>
        <Cry controls>
          <source
            src={`https://pokemoncries.com/cries-old/${id}.mp3`}
            type='audio/mpeg'
          />
        </Cry>
      </Topic>
    </>
  )

  const infoChildrenCheck = (children) => {
    switch (children) {
      case 'abilities':
        return <Abilities />
      case 'misc':
        return <Misc />
      default:
        return <Info />
    }
  }

  return (
    <Wrapper type={types && types[0] && types[0].type.name}>
      <Topbar>
        <Back>
          <Link to='/'>PKMN</Link>
        </Back>
        <TopbarList>
          {id !== 1 && (
            <TopbarItem>
              <Link to={`/pokemon/${id - 1}`}>{id - 1}</Link>
            </TopbarItem>
          )}
          <TopbarItem current>{id}</TopbarItem>
          {id !== 151 && (
            <TopbarItem>
              <Link to={`/pokemon/${id + 1}`}>{id + 1}</Link>
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
                {types && types.map((item) => {
                  const {
                    type: { name: type }
                  } = item
                  return (
                    <img
                      alt={type}
                      src={require(`../../assets/types/${type}.png`)}
                    />
                  )
                })}
              </Types>
            </TypeInfo>
          </PresentationInfo>
          <Mugshot>
            <ImageContainer>
              <Japanese>{japanese}</Japanese>
              {id && (
                <PokemonImage
                  alt={name}
                  src={require(`../../assets/pokemons/${id}.png`)}
                />
              )}
            </ImageContainer>
          </Mugshot>
        </Presentation>
        <Information>
          <InfoMenu>
            <InfoItem onClick={() => setInfo('info')}>info</InfoItem>
            <InfoItem onClick={() => setInfo('abilities')}>abilites</InfoItem>
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
