import React from 'react'
import { Heading as H } from 'theme-ui'
import type { HeadingProps as HP } from 'theme-ui'

export type HeadingPropsAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps = HP & {
  as?: HeadingPropsAs
}

const Heading = ({ as, children, ...props }: HeadingProps) => {
  return (
    <H as={as} {...props}>
      {children}
    </H>
  )
}

export { Heading }
