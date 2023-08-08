import React from 'react';
import ClassComponent from './ClassComponent'; // Import your ClassComponent
import FunctionalComponent from './FunctionalComponent'; // Import your FunctionalComponent

export default {
  title: 'Components/ClassComponent',
  component: ClassComponent,
  parameters: {
    layout: 'centered',
  },
  docs: {
    description: {
      component: 'A custom class component that demonstrates counting and resetting.',
    },
    props: {
      count: {
        description: 'The current count value.',
        defaultValue: 0,
      },
      onIncrement: {
        description: 'Function to increment the count.',
        type: {
          summary: '() => void',
        },
      },
      onReset: {
        description: 'Function to reset the count.',
        type: {
          summary: '() => void',
        },
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: {
        type: 'number', // Use number control for count
        min: 0, // Set minimum value
        step: 1, // Set step value
      },
    },
    onIncrement: { action: 'increment' }, // Use action for onIncrement
    onReset: { action: 'reset' }, // Use action for onReset
    backgroundColor: { control: 'color' },
  },
};

// Add controls configuration for ClassComponent props
const Template = (args) => <ClassComponent {...args} />;
export const Default = Template.bind({});
Default.args = {
  count: 0,
  onIncrement: () => {},
  onReset: () => {},
};
export const FunctionalComponentStory = () => <FunctionalComponent />;
