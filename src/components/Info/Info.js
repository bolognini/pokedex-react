import React from 'react'
import {
  string,
  number,
  arrayOf,
  object
} from 'prop-types'
import { InfoWrapper, Description, Topic } from './Info.style'

const Info = ({
  flavorText,
  height,
  weight,
  types
}) => (
  <InfoWrapper>
    <strong>Bio</strong>
    <Description>{flavorText}</Description>
    <Topic>
      <strong>Height:</strong> <span>{(height / 10).toFixed(1)} m</span>
    </Topic>
    <Topic>
      <strong>Weight:</strong> <span>{(weight / 10).toFixed(1)} kg</span>
    </Topic>
    <Topic>
      <strong>Type:</strong>
      <span>
        {types && types.length > 1
          ? types.map((item, index) => {
            const {
              type: { name: type }
            } = item
            if (index !== 1) {
              return `${type.charAt(0).toUpperCase() + type.slice(1)} and `
            }
            return type.charAt(0).toUpperCase() + type.slice(1)
          })
          : types.map((item) => {
            const {
              type: { name: type }
            } = item
            return type.charAt(0).toUpperCase() + type.slice(1)
          })}
      </span>
    </Topic>
  </InfoWrapper>
)

Info.propTypes = {
  flavorText: string.isRequired,
  height: number,
  weight: number,
  types: arrayOf(object).isRequired
}

Info.defaultProps = {
  height: 0,
  weight: 0
}

export default Info
