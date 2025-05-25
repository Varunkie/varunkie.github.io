import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

import { Carousel } from 'react-responsive-carousel';
import React from 'react';

const GalleryCarousel = ({ id = "", className = "", children, autoplay = false }) => {
    const array = React.Children.toArray(children); 
    const elements = mapElements(array, 5);

    return (
        <Carousel 
          emulateTouch infiniteLoop autoPlay={autoplay}
          showStatus={false} showIndicators={false} showThumbs={false}
          swipeScrollTolerance={10}
          renderArrowPrev={(clickHandler) => <CarouselButton type="prev" onClick={clickHandler} />}
          renderArrowNext={(clickHandler) => <CarouselButton type="next" onClick={clickHandler} />}
        >
            { elements.map((element, i) => 
                <div className={className} key={`${id}_${i}`}>
                    { element.map((value) => value )}
                </div> 
            )}
        </Carousel>
    );
};

const CarouselButton = ({ type = "", onClick = () => {} }) => {
    return (
        <button className={`px-4 absolute text-white hover:text-bold-pink ${type == "prev" ? "left-0" : ""} ${type == "next" ? "right-0" : ""} inset-y-0 z-50 cursor-pointer`} 
        onClick={onClick}>
            { type == "prev" && <IoIosArrowBack className="w-10 h-10 sm:w-16 sm:h-16" /> }
            { type == "next" && <IoIosArrowForward className="w-10 h-10 sm:w-16 sm:h-16" /> }
        </button>
    );
};

const mapElements = (values, size) => {
  const arrayLength = values.length;
  const containerSize = Math.ceil(arrayLength / size);
  const containers = [];
  for (let i = 0, j = 0; i < containerSize && j < arrayLength; i++)
  {
    const elements = [];
    for (let k = 0; k < size && j < arrayLength; k++, j++)
      elements.push(values[j]);
    containers.push(elements);
  }
  return containers;
};

export default GalleryCarousel;
