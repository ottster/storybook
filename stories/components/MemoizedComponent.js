import React from 'react';

const MemoizedComponent = React.memo(({ data }) => {
  console.log('MemoizedComponent rendered');
  return (
    <div>
      {/* Render your component content */}
      {data}
    </div>
  );
});

export default MemoizedComponent;
