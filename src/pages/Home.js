import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import pokedex from '../pokedex-card.json'
import HomeContainer from '../components/HomeContainer'
import 'pokedex-webcomponents'

const Home = () => (
  <Layout>
    <HomeContainer>
      {pokedex.map((pokemon) => (
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
      ))}
    </HomeContainer>
  </Layout>
)

export default Home
