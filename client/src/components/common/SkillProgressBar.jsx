import React from 'react';

const Skill = ({ className = "", title = "", label = "", value = 10, showvalue = false }) => {
  return (
    <div className={`${className} flex flex-col`}>
      <div className="flex justify-between">
        <h1 className="">{title}</h1>
        <span>{showvalue ? `${value}%` : label}</span>
      </div>
      <div className="w-full grow relative rounded-full overflow-hidden">
          <div className="w-full h-full bg-gray-200 dark:bg-gray-600 absolute"></div>
          <div className="h-full bg-indigo-500 dark:bg-orange-500 absolute" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
};

export default Skill;
