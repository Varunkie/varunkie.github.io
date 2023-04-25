import React from 'react';

const Title = ({ className = "", children }) => {
  return (
    <div className={`${className} w-fit space-y-2`}>
      <h1>{children}</h1>
      <div className="tm-hr-300" />
    </div>
  );
};

export default Title;