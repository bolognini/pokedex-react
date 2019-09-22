import React from 'react'
import { Link } from 'react-router-dom'
import { string, number, arrayOf } from 'prop-types'
import {
  Topbar,
  Content
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
  <>
    <Topbar>
      {id !== 1 && <Link to={`/pokemon/${id - 1}`}>{id - 1}</Link>}
      <p>{id}</p>
      {id !== 151 && <Link to={`/pokemon/${id + 1}`}>{id + 1}</Link>}
    </Topbar>
    <Content>
      <div>
        <h1>{name}</h1>
        <p>#{id < 100 ? `0${id}` : id}</p>
        <h2>{japanese}</h2>
        {types
          && types.map((item) => {
            const { type: { name: type } } = item
            return (
              <>
                <img alt={type} src={require(`../../assets/types/${type}.png`)} />
                <p key={type}>{type}</p>
              </>
            )
          })}
        {id && <img alt={name} src={require(`../../assets/pokemons/${id}.png`)} />}
      </div>
      <div>
        <p>{flavorText}</p>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
      </div>
    </Content>
  </>
)

PokemonContainer.propTypes = {
  name: string.isRequired,
  id: number.isRequired,
  japanese: string.isRequired,
  types: arrayOf(string).isRequired,
  flavorText: string.isRequired,
  height: number.isRequired,
  weight: number.isRequired
}

export default PokemonContainer
