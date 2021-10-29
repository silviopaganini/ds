import React from 'react'
import { Box, ColorMode } from 'theme-ui'
import { theme } from '../../theme'

export type IconsProps = {
  id: 'circle'
  color?: keyof ColorMode
}

const Icons = ({ id, color = 'text' }: IconsProps) => (
  <Box
    as="svg"
    // @ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    fill={theme.colors ? theme.colors[color] : 'currentcolor'}
    viewBox="0 0 22 22"
    preserveAspectRatio="true"
    sx={{
      height: [15, 18, 22],
    }}
  >
    {id === 'circle' && (
      <circle
        r={10}
        cx={11}
        cy={11}
        fill="none"
        stroke={(theme.colors ? theme.colors[color] : 'currentcolor') as string}
        strokeWidth={2}
      />
    )}
  </Box>
)

export { Icons }
