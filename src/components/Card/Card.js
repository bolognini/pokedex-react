import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Name } from './Card.style'

const Card = ({ name, japanese }) => {
  return (
    <Wrapper>
      <Name>
        <Link to={{ pathname: `/pokemon/${name}`, state: { japanese: japanese } }}>
          {name}
        </Link>
      </Name>
    </Wrapper>
  )
}

export default Card