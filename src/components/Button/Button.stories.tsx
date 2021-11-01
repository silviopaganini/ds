import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { theme } from '../../theme'

import { Button } from './Button'
import { Icons } from '../'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: Object.keys(theme.buttons || {}),
      control: { type: 'radio' },
    },
  },
  controls: { sort: 'requiredFirst', expanded: true },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Properties = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Properties.args = {
  children: 'Test button',
  variant: 'primary',
}

export const PreIcon = Template.bind({})
PreIcon.args = {
  children: 'Test button',
  variant: 'primary',
  preIcon: <Icons id="Circle" color="background" />,
}

export const PosIcon = Template.bind({})
PosIcon.args = {
  children: 'Test button',
  variant: 'primary',
  posIcon: <Icons id="Circle" color="background" />,
}

export const BothIcons = Template.bind({})
BothIcons.args = {
  children: 'Test button',
  variant: 'primary',
  preIcon: <Icons id="Circle" color="background" />,
  posIcon: <Icons id="Circle" color="background" />,
}

export const OnlyIcon = Template.bind({})
OnlyIcon.args = {
  variant: 'primary',
  preIcon: <Icons id="Circle" color="background" />,
}
