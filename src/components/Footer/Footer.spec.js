import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Footer from './Footer'

describe('Footer component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render component without crashing', () => {
    const { getByText } = render(<Footer />)
    const repositoryLink = getByText('GitHub')

    expect(repositoryLink).toBeTruthy()
    expect(repositoryLink.textContent).toMatch(/GitHub/)
  })
})
