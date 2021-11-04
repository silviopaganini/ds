import React from 'react'
import { render } from '@testing-library/react'
import { Link } from './Link'

describe('Link', () => {
  test('matches snapshot', () => {
    const wrapper = render(<Link />)
    expect(wrapper).toMatchSnapshot()
  })
})
