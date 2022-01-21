import { Story, Meta } from '@storybook/react';

import Table from '../app/components/Table2/Table2';

export default {
  title: 'Example/Table2',
  component: Table,
} as Meta;

const Template: Story<{}> = (args) => <Table {...args} />;

export const Default = Template.bind({})
Default.args = {

}