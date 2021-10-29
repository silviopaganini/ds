import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { theme } from '../../theme'

import { Button } from './Button'

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

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    width="22"
    height="100%"
    fill="currentcolor"
    preserveAspectRatio="true"
  >
    <circle r={10} cx={11} cy={11} fill="none" stroke="currentcolor" strokeWidth={2} />
  </svg>
)

export const PreIcon = Template.bind({})
PreIcon.args = {
  children: 'Test button',
  variant: 'primary',
  preIcon: <Icon />,
}

export const PosIcon = Template.bind({})
PosIcon.args = {
  children: 'Test button',
  variant: 'primary',
  posIcon: <Icon />,
}

export const BothIcons = Template.bind({})
BothIcons.args = {
  children: 'Test button',
  variant: 'primary',
  preIcon: <Icon />,
  posIcon: <Icon />,
}
