import { TbArrowBigRight } from "react-icons/tb";
import { TbMailHeart  } from "react-icons/tb";
import { TbHeart } from "react-icons/tb";

export const BaseButton = ({ className = "", children, ...rest }) => {
    return (
        <button className={`bg-button text-white rounded-2xl flex items-center uppercase font-bold cursor-pointer hover:outline-2 hover:outline-offset-2 hover:outline-button-hover ${className}`}>
            {children}
        </button>
    );
};

export const StartButton = ({ className = "", selectable, children, ...rest }) => {
    return (
        <BaseButton className={`py-3 px-4 sm:px7 space-x-2 ${className}`}>
            <TbHeart className="w-7 h-7 pointer-events-none" />
            <span className={`cursor-pointer ${selectable ? "select-all" : ""}`}>{children}</span>
            <TbHeart className="w-7 h-7 pointer-events-none" />
        </BaseButton>  
    );
};

export const SubmitButton = ({ className = "", value = "", onClick = () => {} }) => {
    return (
        <input className={`${className} rounded-lg bg-button text-white flex items-center font-bold cursor-pointer mx-auto hover:bg-button-hover focus:outline-2 focus:outline-offset-2 focus:outline-button-hover hover:outline-2 hover:outline-offset-2 hover:outline-button-hover`}
          type="submit" value={value} onClick={onClick} />
    );
};

export const EmailButton = ({ className = "", label = "", children, onClick = () => {}, selectable }) => {
    return (
        <button className={`${className} bg-button py-3 rounded-2xl text-white flex items-center uppercase font-bold cursor-pointer hover:outline-2 hover:outline-offset-2 hover:outline-button-hover`}
            onClick={onClick}>
            {children}
            
            <TbMailHeart className="ml-4 sm:ml-7 mr-1 w-7 h-7 pointer-events-none" />
            <span className={`cursor-pointer ml-1 mr-4 sm:mr-7 ${selectable ? "select-all" : ""}`}>{label}</span>
        </button>  
    );
};

export const EasyButton = ({ className = "", children, onClick = () => {} }) => {
    return (
        <button className={`${className} px-4 py-2 rounded-lg bg-button text-white flex items-center font-bold mx-auto cursor-pointer hover:bg-button-hover focus:outline-2 focus:outline-offset-2 focus:outline-button-hover`}
            onClick={onClick}>

            {children}
        </button>
    );
};

export const ContinueButton = ({ className = "", label = "", children, onClick = () => {}, selectable }) => {
    return (
        <button className={`${className} bg-button p-0.5 rounded-3xl text-white flex items-center uppercase font-bold cursor-pointer hover:outline-2 hover:outline-offset-2 hover:outline-button-hover`}
            onClick={onClick}>
            {children}
            
            <TbArrowBigRight className="w-7 h-7 pointer-events-none" />
            {label && <span className={`cursor-pointer ml-1 mr-4 sm:mr-7 ${selectable ? "select-all" : ""}`}>{label}</span>}
        </button>  
    );
};
