import { ComponentStory, ComponentMeta } from '@storybook/react'
import Wrapper from '.'

export default {
  title: 'Wrapper',
  component: Wrapper,
} as ComponentMeta<typeof Wrapper>

const Template: ComponentStory<typeof Wrapper> = () => <Wrapper />

export const Default = Template.bind({})
