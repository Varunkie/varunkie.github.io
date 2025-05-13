import React from 'react';

const Icon = ({ className = "", children, href = "" }) => {
  return (
    <a className={`${className} object-cover cursor-pointer`}
      href={href} target="_blank" rel="noopener noreferrer">
      { children }
    </a>
  );
};

export default Icon;
