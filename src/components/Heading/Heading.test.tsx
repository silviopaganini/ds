import React from 'react'
import { render } from '@testing-library/react'
import { Heading } from './Heading'

describe('Heading', () => {
  test('matches snapshot', () => {
    const wrapper = render(<Heading as="h1">Heading Test</Heading>)
    expect(wrapper).toMatchSnapshot()
  })
})
