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
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    color: {
      options: Object.keys(theme.colors || {}),
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
  color: 'background',
}
