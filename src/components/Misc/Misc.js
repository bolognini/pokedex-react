import React from 'react'
import { string, number } from 'prop-types'
import {
  Topic,
  CaptalizeInfo,
  CryWrapper,
  CryButton,
  Cry
} from './Misc.style'

const Misc = ({ genera, habitat, id }) => (
  <>
    <Topic>
      <strong>Genera:</strong> <CaptalizeInfo>{genera}</CaptalizeInfo>
    </Topic>
    <Topic>
      <strong>Habitat:</strong> <CaptalizeInfo>{habitat}</CaptalizeInfo>
    </Topic>
    <Topic>
      <CryWrapper>
        Cry:
        <CryButton
          type='button'
          onClick={() => {
            const audio = document.querySelector('audio')
            return audio.play()
          }}
          onKeyPress={() => {
            const audio = document.querySelector('audio')
            return audio.play()
          }}
        />
      </CryWrapper>
      <Cry controls>
        <source
          src={`https://pokemoncries.com/cries-old/${id}.mp3`}
          type='audio/mpeg'
        />
      </Cry>
    </Topic>
  </>
)

Misc.propTypes = {
  genera: string.isRequired,
  habitat: string.isRequired,
  id: number.isRequired
}

export default Misc
