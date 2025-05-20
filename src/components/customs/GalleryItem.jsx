const GalleryItem = ({ className = "", src, alt = "", onClick = () => {} }) => {
  return (
    <div className={`${className} rounded-3xl overflow-hidden ${src ? "" : "bg-font"}`}>
      { src && 
        <img className="h-full object-cover cursor-pointer select-none"
          src={src} alt={alt} onClick={onClick} />
      }
    </div>
  );
};

export default GalleryItem;
