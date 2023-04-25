import React from 'react';

const Item = ({ className = "", title, date, children }) => {
  return (
    <div className={`${className} md:space-y-4 flex flex-col`}>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <h2 className="text-center font-bold text-2xl">{title}</h2>
        <div className="lg:px-4 text-2xl lg:tm-border-300 lg:border-2 lg:rounded-lg flex justify-center items-center">
          {date}
        </div>
      </div>
      <ul className="md:tm-border-300 w-full px-12 grow py-6 md:border-2 md:rounded-3xl mx-auto flex flex-col list-disc">
        {children}
      </ul>
    </div>
  );
};

export default Item;
