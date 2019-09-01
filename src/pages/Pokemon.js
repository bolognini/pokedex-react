import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import 'pokedex-webcomponents'

  const Home = ({ match, ...props }) => {
  const { location: { state: { japanese } } } = props
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.name}`)
      .then(res => res.json())
      .then(res => {
        setPokemon(res)
      })
      .catch(error => console.error(error))
  }, [match.params])

  return (
    <Layout>
    
    {console.log(props)}
      {pokemon.results && pokemon.results.map(pokemon => <p>{pokemon.name}</p>)}
      <h1>{pokemon.name}</h1>
      <h2>{japanese}</h2>
      <p>#{pokemon.id}</p>
      {pokemon.types && pokemon.types.map(item => <p key={item.type.name}>{item.type.name}</p>)}

      {pokemon.id && <img alt={pokemon.name} src={require(`../assets/pokemons/${pokemon.id}.png`)}/>}

    </Layout>
  )
}

export default Home
