import React, { PropsWithChildren } from 'react'
import { Box, ColorMode } from 'theme-ui'
import { theme } from '../../theme'

type IconShapeProps = {
  color?: keyof ColorMode
}

const IconShapes = {
  Circle: ({ color = 'text' }: IconShapeProps) => (
    <circle
      r={10}
      cx={11}
      cy={11}
      fill="none"
      stroke={(theme.colors ? theme.colors[color] : 'currentcolor') as string}
      strokeWidth={2}
    />
  ),
}

export type IconsProps = PropsWithChildren<{
  id: keyof typeof IconShapes
  color?: keyof ColorMode
}>

const Icons = ({ id, color = 'text', children }: IconsProps) => {
  const Icon = IconShapes[id]

  return (
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
      {children || <Icon color={color} />}
    </Box>
  )
}

export { Icons }
