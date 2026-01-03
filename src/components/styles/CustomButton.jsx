import { TbArrowBigRight } from "react-icons/tb";
import { TbMailHeart  } from "react-icons/tb";
import { TbHeart } from "react-icons/tb";

export const BaseButton = ({ className = "", children, ...rest }) => {
    return (
        <button className={`bg-button text-white rounded-2xl flex items-center uppercase font-bold cursor-pointer hover:outline-2 hover:outline-offset-2 hover:outline-button-hover ${className}`} {...rest}>
            {children}
        </button>
    );
};

export const SubmitButton = ({ className = "", selectable, children, ...rest }) => {
    return (
        <BaseButton className={`${className} w-min rounded-lg flex items-center justify-center`}
          type="submit" {...rest}>
            <span className={`cursor-pointer ${selectable ? "select-all" : ""}`}>{children}</span>
        </BaseButton>
    );
};

export const ArrowButton = ({ className = "", children, onClick = () => {}, selectable }) => {
    return (
        <BaseButton className={`${className} rounded-3xl`}
            onClick={onClick}>
            <TbArrowBigRight className="w-7 h-7 pointer-events-none" />
            <span className={`cursor-pointer ${selectable ? "select-all" : ""}`}>{children}</span>
        </BaseButton>  
    );
};

export const HeartButton = ({ className = "", selectable, children, ...rest }) => {
    return (
        <BaseButton className={`py-3 px-4 sm:px7 space-x-2 ${className}`} {...rest}>
            <TbHeart className="w-7 h-7 pointer-events-none" />
            <span className={`cursor-pointer ${selectable ? "select-all" : ""}`}>{children}</span>
            <TbHeart className="w-7 h-7 pointer-events-none" />
        </BaseButton>  
    );
};
