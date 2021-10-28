import React from 'react'
import { Button as B } from 'theme-ui'
import type { ButtonProps } from 'theme-ui'

export const Button = ({ ...props }: ButtonProps) => {
  return <B {...props} />
}
