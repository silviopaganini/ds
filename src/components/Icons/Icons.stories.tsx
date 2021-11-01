import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Icons } from './Icons'
import { theme } from '../../theme'

export default {
  title: 'Components/Icons',
  component: Icons,
  backgrounds: {
    default: 'white',
  },
  argTypes: {
    color: {
      options: Object.keys(theme.colors || {}),
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Icons>

const Template: ComponentStory<typeof Icons> = args => <Icons {...args} />

export const Properties = Template.bind({})
Properties.args = {
  id: 'Circle',
}
