import React from 'react'
import {
  Topbar,
  Content
} from './PokemonContainer.style'

const PokemonContainer = ({ name, id, japanese, types, flavorText, height, weight }) => {
  return (
    <>
      <Topbar>opa</Topbar>
      <Content>
        <div>
          <h1>{name}</h1>
          <p>#{id}</p>
          <h2>{japanese}</h2>
          {types && types.map(item => <p key={item.type.name}>{item.type.name}</p>)}
          {id && <img alt={name} src={require(`../../assets/pokemons/${id}.png`)}/>}
        </div>
        <div>
          <p>{flavorText && flavorText[1].flavor_text}</p>
          <p>{height}</p>
          <p>{weight}</p>
        </div>
      </Content>
    </>
  )
}

export default PokemonContainer