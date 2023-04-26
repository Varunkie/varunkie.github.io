import React from 'react';

const Window = ({ className = "", children, ...rest }) => {
  return (
    <div className={`${className} tm-ct-300 p-6 md:p-10 rounded-3xl`} {...rest}>
      {children}
    </div>
  );
};

export default Window;
