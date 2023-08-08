import React from 'react';

const RegularComponent = ({ data }) => {
  console.log('RegularComponent rendered');
  return (
    <div>
      {/* Render your component content */}
      {data}
    </div>
  );
};

export default RegularComponent;
