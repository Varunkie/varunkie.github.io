import { TbMailHeart  } from "react-icons/tb";

const EmailButton = ({ className = "", label = "", children }) => {
    return (
        <button className={`${className} bg-button py-3 rounded-2xl text-white flex items-center uppercase font-bold cursor-pointer`}>
            {children}
            
            <TbMailHeart className="ml-4 sm:ml-7 mr-1 w-7 h-7" />
            <label className="cursor-pointer ml-1 mr-4 sm:mr-7 select-all">{label}</label>
        </button>  
    );
};

export default EmailButton;
