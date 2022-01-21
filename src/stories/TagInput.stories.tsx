import React from 'react';
import { Story, Meta } from '@storybook/react';

import TagInput, { TagInputProps } from '../app/components/TagInput/TagInput';
import { Tag } from 'react-tag-input'
import { useState } from '@storybook/addons';

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

export function WorkingLiveExample() {
  const [tags, setTags] = useState<Tag[]>([])
  
  return <TagInput 
    placeholder='Insira as tags desse post'
    tags={tags}
    onAdd={tag => setTags([...tags, tag])}
    onDelete={index => setTags(tags.filter((tag, i) => i !== index))}
  />
}