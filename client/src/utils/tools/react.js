import React from 'react';

export const populateProps = (child, props) => {
  if (React.isValidElement(child)) {
    return React.cloneElement(child, props);
  } else return child;
};
