export const d = "m1440 12-80 10.7C1280 33 1120 55 960 49.3 800 44 640 12 480 6.7 320 1 160 23 80 33.3L0 44V-1H1440Z";

export const WaveContainer = ({ className = "", content = "", opacity = "1", height = "200", top, bottom, children }) => {
    return (
        <div className={`${className} relative`}>
            {top && <WaveBorder opacity={opacity} height={height} inverse />}
            <div className={`${content} flex flex-col items-center`}>
                {children}
            </div>
            {bottom && <WaveBorder opacity={opacity} height={height} />}
        </div>
    );
}

export const WaveBorder = ({ opacity = "1", inverse, height = 200 }) => {
    var style = inverse ? { transform: "rotate(180deg)", "transformOrigin": "50% 50%" } : {};
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 1440 ${height}`}>
            <path fillOpacity={opacity} style={style} d={d}>

            </path>
        </svg>
    );
}

export default WaveContainer;
