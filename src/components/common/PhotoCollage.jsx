import React from 'react';

const PhotoCollage = ({  id = "", className = "", content = "", children, rows }) => {
  const array = React.Children.toArray(children); 
  const elements = mapElements(array, rows);
  return (
    <div className={`${className} grid`}>
      { elements.map((element, i) => 
        <div className={`${content} grid`} key={`${id}_${i}`}>
          { element.map((value) => value )}
        </div>
      )}
    </div>
  );
};

const mapElements = (values, size) => {
  const arrayLength = values.length;
  const elementSize = Math.ceil(arrayLength / size);
  const containers = [];
  for (let i = 0, j = 0; i < size && j < arrayLength; i++)
  {
    const elements = [];
    for (let k = 0; k < elementSize && j < arrayLength; k++, j++)
      elements.push(values[j]);
    containers.push(elements);
  }
  return containers;
};

export default PhotoCollage;
