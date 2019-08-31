import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import 'pokedex-webcomponents'

const Home = ({ match }) => {
  const [pokemon, setPokemon] = useState({})
  const [pokemonImage, setPokemonImage] = useState({})

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.name}`)
      .then(res => res.json())
      .then(res => {
        setPokemon(res)
      })
      .catch(error => console.error(error))
  }, [match.params])

  useEffect(() => {
    fetch(`https://pokeapi.bastionbot.org/v1/pokemon/${match.params.name}`)
      .then(res => res.json())
      .then(res => {
        setPokemonImage(res)
      })
      .catch(error => console.error(error))
  }, [match.params])

  return (
    <Layout>
      {console.log('POKEMONIMAGE: ', pokemonImage)}
      {pokemon.results && pokemon.results.map(pokemon => <p>{pokemon.name}</p>)}
      <h1>{pokemon.name}</h1>
      <p>#{pokemon.id}</p>
      {pokemon.types && pokemon.types.map(item => <p>{item.type.name}</p>)}

      <img alt='pokemon' src={pokemon.sprites && pokemon.sprites.front_default}/>
    </Layout>
  )
}

export default Home
