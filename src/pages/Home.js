import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import 'pokedex-webcomponents'

const Home = () => {
  return (
    <Layout>
      <Link to={`/pokemon/bulbasaur`}>BULBASAUR</Link>
      <br />
      <Link to={`/pokemon/charmander`}>CHARMANDER</Link>
      <br />
      <Link to={`/pokemon/mewtwo`}>MEWTWO</Link>
    </Layout>
  )
}

export default Home
