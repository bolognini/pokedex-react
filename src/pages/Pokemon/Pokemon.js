import React, { useState, useEffect } from 'react'
import { string, bool, shape } from 'prop-types'
import Layout from '../../components/Layout'
import PokemonContainer from '../../components/PokemonContainer'
import 'pokedex-webcomponents'

const Pokemon = ({ match }) => {
  const [pokemon, setPokemon] = useState({})
  const [description, setDescription] = useState({})

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.name}`)
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res)
      })
      .catch((error) => console.error(error))
  }, [match.params])

  useEffect(() => {
    fetch(`http://pokeapi.co/api/v2/pokemon-species/${match.params.name}`)
      .then((res) => res.json())
      .then((res) => {
        setDescription(res)
      })
      .catch((error) => console.error(error))
  }, [match.params])

  const { names } = description
  const { flavor_text_entries: flavorText } = description

  const findJapaneseName = (arr) => {
    const japaneseResult = arr && arr.filter((item) => {
      const { language: { name } } = item
      return name === 'ja'
    })
    return japaneseResult && japaneseResult[0].name
  }

  const findRedDescription = (arr) => {
    const redResult = arr && arr.filter((item) => {
      const { version: { name } } = item
      return name === 'red'
    })
    return redResult && redResult[0].flavor_text
  }

  return (
    <Layout>
      <PokemonContainer
        name={pokemon.name}
        id={pokemon.id}
        types={pokemon.types}
        height={pokemon.height}
        weight={pokemon.weight}
        japanese={findJapaneseName(names)}
        flavorText={findRedDescription(flavorText)}
      />
    </Layout>
  )
}

Pokemon.propTypes = {
  match: shape({
    isExact: bool,
    params: shape({
      name: string
    }),
    path: string,
    url: string
  }).isRequired
}

export default Pokemon
