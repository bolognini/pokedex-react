import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Search from './Home.style'
import Layout from '../../components/Layout'
import pokedex from '../../pokedex-card.json'
import HomeContainer from '../../components/HomeContainer'
import 'pokedex-webcomponents'

const Home = () => {
  const [filteredName, setFilteredName] = useState('')

  const filteredPokemon = (event) => {
    const { target: { value } } = event
    setFilteredName(value)
  }

  return (
    <Layout>
      <HomeContainer searchInput={(
        <Search
          type='text'
          placeholder='search by name or number'
          onChange={filteredPokemon}
        />
        )}
      >
        {filteredName === ''
          ? pokedex.map((pokemon) => (
            <Link to={`/pokemon/${pokemon.name}`}>
              <pokedex-card
                name={pokemon.name}
                id={pokemon.id}
                alt={pokemon.name}
                source={pokemon.sprite}
                background={pokemon.types[0]}
              >
                {pokemon.types.map((item, index) => <span slot={`type${index}`}>{item}</span>)}
              </pokedex-card>
            </Link>
          ))
          : pokedex.map((pokemon) => (
            pokemon.name.includes(filteredName.toLowerCase())
              ? (
                <Link to={`/pokemon/${pokemon.name}`}>
                  <pokedex-card
                    name={pokemon.name}
                    id={pokemon.id}
                    alt={pokemon.name}
                    source={pokemon.sprite}
                    background={pokemon.types[0]}
                  >
                    {pokemon.types.map((item, index) => <span slot={`type${index}`}>{item}</span>)}
                  </pokedex-card>
                </Link>
              )
              : false
          ))}
      </HomeContainer>
    </Layout>
  )
}

export default Home
