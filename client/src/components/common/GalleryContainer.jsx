import React from 'react';

const Gallery = React.forwardRef(({ index, children, ...rest }, ref) => {
  const array = React.Children.toArray(children); 
  return (index >= array.length || array < 0) ? (null) : (
    <div {...rest} ref={ref}>
      {array[index]}
    </div>
  );
});

export default Gallery;
