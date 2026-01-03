import { HardText } from "../../components/effects/WaveText";
import { FloatSparkles } from "../../components/layouts/FloatContainer";

export const WaveWith = ({ className = "fill-dark-cyan", children, 
    viewport = "0.625 -53.44183349609375 225 70.94506072998047", value = "", ...rest }) => {
    return (
        <div className={`w-full ${className} flex relative justify-center z-10`} {...rest}>
            <HardText id="c1"
                className={`w-full h-20 flex justify-center font-extrabold text-6xl` }
                viewport="0.625 -53.44183349609375 225 70.94506072998047"
                alignment="middle" anchor="middle" offset="0px" 
                value={value}>

                {children}
            </HardText>
        </div>
    );
};

export const WithSparkles = ({ className = "" }) => {
    return (
        <div className={`w-0 h-full ${className} absolute flex jusitfy-center items-center`}>
            <FloatSparkles className="hidden xs:flex xs:w-14 xs:h-14 sm:w-16 sm:h-16" 
                stars={2} width={100} height={100} xOffset={-120} yOffset={0} />
            <FloatSparkles className="hidden xs:flex xs:w-14 xs:h-14 sm:w-16 sm:h-16" 
                stars={3} width={100} height={100} xOffset={155} yOffset={0} />
        </div>
    );
};