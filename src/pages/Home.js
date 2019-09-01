import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import pokedex from '../pokedex-card.json'
import Card from '../components/Card'
import 'pokedex-webcomponents'

const Home = () => {
  return (
    <Layout>
      {pokedex.map(pokemon => 
        <pokedex-card
          href={`/pokemon/${pokemon.name}`}
          id={pokemon.id}
          source={pokemon.sprite}
        >
          <Link
            slot='name'
            to={{
              pathname: `/pokemon/${pokemon.name}`,
              state: {
                japanese: pokemon.japanese
              }
            }}
          >
            {pokemon.name}
          </Link>
          {pokemon.types.map((item, index) =>
            <span slot={`type${index}`}>{item}</span>
          )}
        </pokedex-card>
      )}
      {console.log(pokedex)}
      {pokedex.map(pokemon =>
        <Card
          key={pokemon.id}
          name={pokemon.name}
          japanese={pokemon.japanese}
        />
      )}
    </Layout>
  )
}

export default Home
