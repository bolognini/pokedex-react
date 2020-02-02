import React, { Fragment } from 'react'
import {
  arrayOf,
  string,
  object
} from 'prop-types'
import { Topic, CaptalizeInfo } from './Abilities.style'

const Abilities = ({ abilities, effectEntries }) => (
  <>
    {abilities && abilities.map((item, index) => {
      const {
        ability: { name: abilityName }
      } = item
      return (
        <Fragment key={`ability-key_${abilityName}`}>
          <Topic>
            <strong>Name:</strong>{' '}
            <CaptalizeInfo>{abilityName}</CaptalizeInfo>
          </Topic>
          <Topic>
            <strong>Effect:</strong> <span>{effectEntries[index]}</span>
          </Topic>
        </Fragment>
      )
    })}
  </>
)

Abilities.propTypes = {
  abilities: arrayOf(object).isRequired,
  effectEntries: arrayOf(string).isRequired
}

export default Abilities
