import { Story, Meta } from '@storybook/react';

import FieldDescriptor, { FieldDescriptorProps } from '../components/FieldDescriptor/FieldDescriptor';

export default {
  title: 'Example/FieldDescriptor',
  component: FieldDescriptor,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<FieldDescriptorProps> = (args) => <FieldDescriptor {...args} />;

export const Default = Template.bind({})

Default.args = {
  label: 'data de nascimento:',
  value:  '26 de Dezembro de 1997 (22 anos)'
}
