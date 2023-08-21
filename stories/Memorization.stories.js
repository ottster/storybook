import React from 'react';
import RegularComponent from './components/RegularComponent';
import MemoizedComponent from './components/MemoizedComponent';

export default {
  title: 'Components/Memoization',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Regular = () => <RegularComponent data="Regular Component" />;
export const Memoized = () => <MemoizedComponent data="Memoized Component" />;
