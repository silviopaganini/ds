import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Heading } from './Heading'
import { theme } from '../../theme'
// @ts-ignore
import HeadingMDXDocs from './Heading.mdx'

export default {
  title: 'Components/Heading',
  component: Heading,
  backgrounds: {
    default: 'white',
  },
  parameters: {
    docs: {
      page: HeadingMDXDocs,
    },
  },
  argTypes: {
    color: {
      options: Object.keys(theme.colors || {}),
      control: { type: 'radio' },
    },
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = args => <Heading {...args} />

export const Properties = Template.bind({})
Properties.args = {
  as: 'h1',
  color: 'primary',
  children: 'Heading H1',
}
