import { VscSparkleFilled } from "react-icons/vsc";
import { HiSparkles } from "react-icons/hi2";

export const Container = ({ className = "", stars = 2 }) => {
    return(
        <div className={`${className} relative flex justify-center items-center`}>
            <Icon stars={stars} />
        </div>
    );
};

export const Icon = ({ stars }) => {
    return (<>
        { stars === 2 && <VscSparkleFilled className="w-full h-full fill-inherit" />}
        { stars === 3 && <HiSparkles className="w-full h-full fill-inherit" />}
    </>);
};

/*
export const Icon = ({ stars }) => {
    return (<>
        { stars === 2 && 
        <>
            <Sparkle className="absolute w-11/12 -translate-x-1 -translate-y-2 select-none"
                style={{ "minWidth": "40px" }} />
            <Sparkle className="absolute w-1/2 translate-x-3 translate-y-4 select-none"
                style={{ "minWidth": "25px" }} />
        </>
        }
        { stars === 3 &&
        <>
            <Sparkle className="absolute w-3/7 translate-x-2 -translate-y-5 select-none"
                style={{ "minWidth": "15px" }} />
            <Sparkle className="absolute w-11/12 -translate-x-4 -translate-y-1 select-none"
                style={{ "minWidth": "40px" }} />
            <Sparkle className="absolute w-2/3 translate-x-3 translate-y-4 select-none"
                style={{ "minWidth": "30px" }} />
        </>
        }
    </>);
};
*/

const Sparkle = ({ className = "" }) => {
    return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 40.8 48.8" className={className} xmlSpace="preserve">
            <path d="M32.4,24.7c0,0.7-0.3,1.1-1.1,1.3c-1.6,0.5-3.1,1-4.5,1.9c-2.1,1.4-3.3,3.4-4.1,5.8c-0.2,0.5-0.3,1-0.5,1.5
                c-0.2,0.7-0.6,1-1.3,1c-0.6,0-1.1-0.3-1.3-1c-0.4-1.6-1-3.1-1.8-4.5c-1.4-2.3-3.5-3.5-5.9-4.3c-0.5-0.2-1-0.3-1.4-0.4
                c-0.6-0.2-1-0.7-1-1.2c0-0.6,0.3-1.1,1-1.3c0.8-0.3,1.6-0.5,2.4-0.8c3.3-1.2,5.3-3.6,6.4-6.9c0.2-0.5,0.3-1,0.5-1.5
                c0.2-0.6,0.7-1,1.3-1c0.6,0,1.1,0.4,1.3,1c0.4,1.5,0.9,2.9,1.7,4.2c1.3,2.4,3.5,3.7,6,4.5c0.5,0.2,1.1,0.3,1.7,0.5
                C32.1,23.6,32.4,24.1,32.4,24.7z"/>
        </svg>
    );
};

export default Container;
