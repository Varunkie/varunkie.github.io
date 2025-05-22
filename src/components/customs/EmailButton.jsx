import { TbMailHeart  } from "react-icons/tb";

const EmailButton = ({ className = "", label = "", children, onClick = () => {}, selectable }) => {
    return (
        <button className={`${className} bg-button py-3 rounded-2xl text-white flex items-center uppercase font-bold cursor-pointer`}
            onClick={onClick}>
            {children}
            
            <TbMailHeart className="ml-4 sm:ml-7 mr-1 w-7 h-7" />
            <label className={`cursor-pointer ml-1 mr-4 sm:mr-7 ${selectable ? "select-all" : ""}`}>{label}</label>
        </button>  
    );
};

export default EmailButton;
