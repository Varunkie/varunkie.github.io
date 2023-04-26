import React from 'react';

const Icon = ({ className = "", children, href = "" }) => {
  return (
    <a className={`${className} w-16 h-16 p-4 tm-border-300 object-cover cursor-pointer rounded-full border-2`}
      href={href} target="_blank" rel="noopener noreferrer">
      { children }
    </a>
  );
};

export default Icon;
