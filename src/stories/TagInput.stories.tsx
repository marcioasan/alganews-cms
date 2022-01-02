import React from 'react';
import { Story, Meta } from '@storybook/react';

import TagInput, { TagInputProps } from '../components/TagInput/TagInput';

export default {
  title: 'Example/TagInput',
  component: TagInput,
} as Meta;

const Template: Story<TagInputProps> = (args) => 
<div>
  <TagInput {...args} />
</div>

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Insira as tags deste post',
  tags: [{ id: '1', text: 'Javascript' }]
}

export const VariousTags = Template.bind({})
VariousTags.args = {
  placeholder: 'Insira as tags deste post',
  tags: [
    { id: '1', text: 'Javascript' },
    { id: '2', text: 'Java' },
    { id: '3', text: 'Ruby' },
    { id: '4', text: 'Python' },
    { id: '5', text: 'Spring' },
    { id: '6', text: 'Themeleaf' },
    { id: '7', text: 'Angular' },
  ]
}