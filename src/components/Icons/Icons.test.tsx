import React from 'react'
import { render } from '@testing-library/react'
import { Icons } from './Icons'

describe('Icons', () => {
  test('matches snapshot', () => {
    const wrapper = render(<Icons id="circle" />)
    expect(wrapper).toMatchSnapshot()
  })
})
