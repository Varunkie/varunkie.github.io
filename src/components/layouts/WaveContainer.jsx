export const d = "M0 192l80-10.7C160 171 320 149 480 154.7 640 160 800 192 960 197.3c160 5.7 320-16.3 400-26.6l80-10.7v45H0Z";

const Container = ({ className = "", color = "#000000", opacity = "1", top, bottom, children }) => {
    return (
        <div className={`${className} relative`}>
            {top && <Border color={color} opacity={opacity} />}
            {children}
            {bottom && <Border color={color} opacity={opacity} inverse />}
        </div>
    );
}

const Border = ({ color = "#000000", opacity = "1", inverse }) => {
    var style = inverse ? { transform: "rotate(180deg)", "transformOrigin": "50% 50%" } : {};
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill={color} fillOpacity={opacity} style={style} d={d}>

            </path>
        </svg>
    );
}

export default Container;
