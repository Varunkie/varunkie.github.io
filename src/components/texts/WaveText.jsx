export const d = "M.625 58.75l12.5 1.6719c12.5 1.6094 37.5 5.0469 62.5 5 25 .0469 50-3.3906 75-4.1719s50 .7813 62.5 1.6719l12.5.8281v2.5h-225Z";

const WaveText = ({ className = "", id = "", children, 
        x = 0, y = 0, width = 100 }) => {
    return (
        <svg viewBox={`${x} ${y} 250 70`} className={`w-${width}`}>
            <path id={id} d={d} className="fill-transparent" />
            <text className={className} x="50%">
                <textPath xlinkHref={`#${id}`} textAnchor="middle" startOffset="0%">
                    {children}
                </textPath>
            </text>
        </svg>
    );
};

export default WaveText;
