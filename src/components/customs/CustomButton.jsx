import { TbMailHeart  } from "react-icons/tb";

export const SubmitButton = ({ className = "", value = "" }) => {
    return (
        <input className={`${className} px-4 py-2 rounded-lg bg-button text-white flex items-center font-bold cursor-pointer mx-auto hover:bg-button-hover focus:outline-2 focus:outline-offset-2 focus:outline-button-hover hover:outline-2 hover:outline-offset-2 hover:outline-button-hover`}
          type="submit" value={value} />
    );
};

export const EmailButton = ({ className = "", label = "", children, onClick = () => {}, selectable }) => {
    return (
        <button className={`${className} bg-button py-3 rounded-2xl text-white flex items-center uppercase font-bold cursor-pointer hover:outline-2 hover:outline-offset-2 hover:outline-button-hover`}
            onClick={onClick}>
            {children}
            
            <TbMailHeart className="ml-4 sm:ml-7 mr-1 w-7 h-7" />
            <label className={`cursor-pointer ml-1 mr-4 sm:mr-7 ${selectable ? "select-all" : ""}`}>{label}</label>
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
