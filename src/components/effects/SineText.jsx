const SineText = ({ id = "", className = "", style = {}, value = "",
  startRotation = -3, rotation = 2.75, minRotation = -5, maxRotation = 1.25,
  startDelta = 3.5, delta = 1.5, amplitude = 2 }) => {

  return (
    <div className={`${className} overflow-visible`} style={style}>
      { value.split(' ').map((word, i) => 
        <div className={`flex overflow-visible ${i > 0 ? "-translate-y-3" : ""}`} key={`${id}_${i}`}>
          { word.split('').map((char, j) => 
            <span className="origin-center block overflow-visible" key={`${id}_${i}_${j}`}
              style={{ 
                "rotate": `${pingPong(startRotation + (j * rotation), minRotation, maxRotation)}deg`,
                "translate": `0px ${Math.sin(startDelta + j * delta) * {amplitude}}px`, 
              }}
            >
              {char}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

const pingPong = (t, min, max) => {
  const range = max - min;
  const pingpongValue = Math.abs(Math.sin(t));
  return min + pingpongValue * range;
};

export default SineText;
