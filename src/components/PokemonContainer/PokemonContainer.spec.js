import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'
import PokemonContainer from './PokemonContainer'
import mockedData from './PokemonContainer.mock'

describe('Info component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should change Pokémon informations when clicking on tabs', async () => {
    const { getByText, getAllByText } = render(
      <BrowserRouter>
        <PokemonContainer {...mockedData} />
      </BrowserRouter>
    )

    const abilitiesTab = getByText('abilities')
    const miscTab = getByText('misc')

    expect(getAllByText(/The SHELLDER that is latched/)).toBeTruthy()

    fireEvent.click(abilitiesTab)
    expect(getAllByText('regenerator')).toBeTruthy()

    fireEvent.click(miscTab)
    expect(getAllByText('Hermit Crab Pokémon')[0]).toBeInTheDocument()
  })
})
