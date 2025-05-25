export const GalleryItem = ({ className = "", 
  thumbnail, fullart, alt = "", onClick = () => {},
  selectable, }) => {
    
  const src = thumbnail ? thumbnail : fullart;
  return (
    <div className={`${className} rounded-3xl overflow-hidden ${src ? "" : "bg-font"} ${selectable ? `cursor-pointer hover:outline-2 hover:outline-offset-2 hover:outline-button-hover` : ""}`}>
      { src && 
        <img className="h-full object-cover cursor-pointer select-none"
          src={src} alt={alt} onClick={onClick} />
      }
    </div>
  );
};

export const CarouselItem = ({ className = "", 
  thumbnail, fullart, alt = "", onClick = () => {},
  selectable, }) => {

  const src = thumbnail ? thumbnail : fullart;
  return (
    <div className={`${className} relative rounded-3xl overflow-hidden ${src ? "" : "bg-font"} ${selectable ? `cursor-pointer hover:outline-2 hover:outline-offset-2 hover:outline-button-hover` : ""}`}
      onClick={onClick}>
      { src && 
        <img className="absolute w-full h-full left-0 object-cover select-none"
          src={src} alt={alt} />
      }
    </div>
  );
};
