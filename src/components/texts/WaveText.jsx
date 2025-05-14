import { useRef, useEffect } from "react";

export const d = "M.625 0l12.5 1.6719c12.5 1.6094 37.5 5.0469 62.5 5 25 .0469 50-3.3906 75-4.1719s50 .7813 62.5 1.6719l12.5.8281v2.5h-225Z";

const WaveText = ({ className = "", id = "", children, visible,
    alignment = "middle", anchor = "middle",
    x = 0, y = 0, size = "1", scale = "1", offset = "0px" }) => {

    const svgElement = useRef();
    const textElement = useRef();
    const pathElement = useRef();

    useEffect(() => {
        const textBox = textElement.current.getBBox();
        const pathBox = pathElement.current.getBBox();

        const svgPosX = (pathBox.x - x) / scale;
        const svgPosY = (getSvgPositionY(textBox, pathBox, alignment) - y) / scale;
        const svgWidth = pathBox.width / scale;
        const svgHeight = textBox.height / scale;

        svgElement.current.setAttribute('viewBox', `${(svgPosX)} ${svgPosY} ${svgWidth} ${svgHeight}`);
    }, [alignment, scale, Math.random()]);

    return (
        <svg className="w-92 relative overflow-visible" ref={svgElement}
            style={{ scale: `${size} ${size}` }}>
            <path id={id} d={d} className={`absolute ${visible ? "" : "fill-transparent"}`} ref={pathElement}
                style={{ transform: `translateX(${getTranslate(anchor, offset)})` }}  />
            <text className={className} x={getTextPosition(anchor)} ref={textElement}>
                <textPath xlinkHref={`#${id}`} textAnchor={anchor} startOffset={getOffset(anchor, offset)}>
                    <tspan>{children}</tspan>
                </textPath>
            </text>
        </svg>
    );
};

const getSvgPositionY = (textBox, pathBox, alignment) => {
    if (alignment === "top")
        return textBox.y + pathBox.height;
    if (alignment === "bottom")
        return pathBox.height - textBox.height;
    else
        return textBox.y;
};

const getTextPosition = (anchor) => {
    if (anchor === "start")
        return "0";
    else if (anchor === "end")
        return "100%";
    else
        return "50%";
};

const getOffset = (anchor, value) => {
    if (anchor === "start")
        return value;
    else if (anchor === "end")
        return `-${value}`;
    else
        return value;
};

const getTranslate = (anchor, value) => {
    if (anchor === "start")
        return `-${value}`;
    else if (anchor === "end")
        return value;
    else
        return `-${value}`;
};

export default WaveText;
