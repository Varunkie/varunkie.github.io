import { Icon as Sparkles } from '../effects/Sparkles';

export const FloatWrapper = ({ className="", width = 413, height = 272, xOffset = 0, yOffset = 0, left, right, center, children }) => {
  if (right)
    return (              
      <div className={`${className} absolute right-0 select-none`}
        style={{ "translate": `${width + xOffset}px ${yOffset}px` }}>
        {children}
      </div>
    );
  else if (left)
    return (              
      <div className={`${className} absolute left-0 select-none`}
        style={{ "translate": `-${width + xOffset}px ${yOffset}px` }}>
        {children}
      </div>
    );
  else    
    return (              
      <div className={`${className} absolute select-none`}
        style={{ "translate": `${- width * 0.5 + xOffset}px ${yOffset}px` }}>
        {children}
      </div>
    );
};

export const FloatImage = ({ className="", left, right,
  width = 413, height = 272, xOffset = 0, yOffset = 0, 
  src, alt = "" }) => {

  return (      
    <FloatWrapper className={className} 
        width={width} height={height} xOffset={xOffset} yOffset={yOffset} 
        left={left} right={right}>

        <img style={{ "maxWidth": `${width}px`, "maxHeight": `${height}px`, "width": `${width}px`, "height": `${height}px` }}
            src={src} alt={alt} />
    </FloatWrapper>        
  );
};

export const FloatSparkles = ({ className = "", left, right,
  width = 413, height = 272, xOffset = 0, yOffset = 0,
  stars = 2, color = "cyan" }) => {

  return (      
    <FloatWrapper className={`${className} flex justify-center items-center`} 
        width={width} height={height} xOffset={xOffset} yOffset={yOffset}
        left={left} right={right}>

        <Sparkles stars={stars} color={color} />
    </FloatWrapper>        
  );
};

export default FloatWrapper;
