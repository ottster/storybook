import React from 'react';
import RegularComponent from './components/RegularComponent';
import MemoizedComponent from './components/MemoizedComponent';

export default {
  title: 'Components/Memoization',
};

export const Regular = () => <RegularComponent data="Regular Component" />;
export const Memoized = () => <MemoizedComponent data="Memoized Component" />;
