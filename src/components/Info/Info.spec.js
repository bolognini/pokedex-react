import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Info from './Info'

const mockedData = {
  flavorText: `The SHELLDER that is latched onto SLOWPOKE's tailis said to feed on the host's left over scraps.`,
  height: 16,
  weight: 785,
  types: [{
    type: {
      name: 'psychic'
    }
  }, {
    type: {
      name: 'water'
    }
  }]
}

describe('Info component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render component without crashing', () => {
    const { debug } = render(<Info {...mockedData} />)

    // debug()
  })
})
