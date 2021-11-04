import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Link } from './Link'
import { theme } from '../../theme'
import { Icons } from '../'

export default {
  title: 'Components/Link',
  component: Link,
  backgrounds: {
    default: 'white',
  },
  argTypes: {
    variant: {
      options: Object.keys(theme.links || {}),
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = args => <Link {...args} />

export const Properties = Template.bind({})
Properties.args = {
  children: 'Link',
  variant: 'primary',
  underline: false,
}

export const PreIcon = Template.bind({})
PreIcon.args = {
  children: 'Test Link',
  variant: 'primary',
  preIcon: <Icons id="Circle" color="primary" />,
}

export const PosIcon = Template.bind({})
PosIcon.args = {
  children: 'Test Link',
  variant: 'primary',
  posIcon: <Icons id="Circle" color="primary" />,
}

export const BothIcons = Template.bind({})
BothIcons.args = {
  children: 'Test Link',
  variant: 'primary',
  preIcon: <Icons id="Circle" color="primary" />,
  posIcon: <Icons id="Circle" color="primary" />,
}
