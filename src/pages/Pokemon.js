import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import PokemonContainer from '../components/PokemonContainer'
import 'pokedex-webcomponents'

  const Home = ({ match, ...props }) => {
  const { location: { state: { japanese } } } = props
  const [pokemon, setPokemon] = useState({})
  const [description, setDescription] = useState({})
  const [encounters, setEncounters] = useState({})

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.name}`)
      .then(res => res.json())
      .then(res => {
        setPokemon(res)
      })
      .catch(error => console.error(error))
  }, [match.params])

  useEffect(() => {
    fetch(`http://pokeapi.co/api/v2/pokemon-species/${match.params.name}`)
      .then(res => res.json())
      .then(res => {
        setDescription(res)
      })
      .catch(error => console.error(error))
  }, [match.params])

  return (
    <Layout>
      {console.log('description', description)}
      {console.log('pokemon', pokemon)}
      {console.log('encounters', encounters)}
      <PokemonContainer
        name={pokemon.name}
        id={pokemon.id}
        japanese={japanese}
        types={pokemon.types}
        flavorText={description.flavor_text_entries}
        height={pokemon.height}
        weight={pokemon.weight}
      />
    </Layout>
  )
}

export default Home
