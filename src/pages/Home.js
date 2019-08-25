import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import 'pokedex-webcomponents'

const Home = () => {
  const [pokemon, setPokemon] = useState({})
  const [url, setUrl] = useState({})

  useEffect(() => {
    // const name = prompt('Nome:', 'pikachu')

    fetch(`https://pokeapi.co/api/v2/pokemon/700`)
      .then(res => res.json())
      .then(res => {
        setPokemon(res)
        setUrl(res.results)
      })
      .catch(error => console.error(error))
  }, [])

  //   fetch(`https://pokeapi.co/api/v2/pokemon?limit=965`)
  //     .then(res => res.json())
  //     .then(res => {
  //       setPokemon(res)
  //       setUrl(res.results)
  //     })
  //     .catch(error => console.error(error))
  // }, [])

  // useEffect(() => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${url}`)
  //     .then(res => res.json())
  //     .then(res => )
  // })

  console.log(pokemon)

  return (
    <Layout>


      <pokedex-card>
        <span slot='name'>{pokemon.name}</span>
        <span slot='id'>#{pokemon.id}</span>
        {pokemon.types && pokemon.types.map((item, index) => <span slot={`type${index}`}>{item.type.name}</span>)}
      </pokedex-card>


      {/* {pokemon.results && pokemon.results.map(pokemon => <p>{pokemon.name}</p>)} */}
      <p>Nome: {pokemon.name}</p>
      <p>#{pokemon.id}</p>
      {pokemon.types && <p>{pokemon.types.map(item => item.type.name)}</p>}

      <img alt='pokemon' src={pokemon.sprites && pokemon.sprites.front_default}/>
    </Layout>
  )
}

export default Home
