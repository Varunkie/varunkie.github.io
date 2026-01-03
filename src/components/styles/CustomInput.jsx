import { useCallback } from "react";
import { ArrowButton } from "../../components/styles/CustomButton";

export const BaseInput = ({ className = "", type = "text", name = "", label = "", placeholder = "", autocomplete = "off", rows = 1, options = [], onChange, onEnter, ...rest }) => {
  const handleEnter = useCallback((e) => {
    if (onEnter && e.keyCode == 13) onEnter();
  }, [onEnter]);
  
  return (<>
      { type === "textarea" && 
        <textarea className={`grow ${className} field-sizing-fixed focus:outline-none placeholder:italic`}
          id={name} name={name} placeholder={placeholder} rows={rows} onKeyDown={handleEnter} onChange={onChange} {...rest} />}
      
      { type === "" || type === "text" && 
        <input className={`grow ${className} focus:outline-none placeholder:italic`}
          type={type} id={name} name={name} placeholder={placeholder} autoComplete={autocomplete} onKeyDown={handleEnter} onChange={onChange} {...rest} />}
      
      { type === "radio" && <>
        <div className="flex flex-col grow space-y-1">
            { options && options.map((item, i) => 
            <div key={`${name}_${i}_key`} className="flex grow space-x-3">
                <input type="radio" id={`${name}_${i}`} name={name} value={i} onChange={() => { onChange({ target: { value: i }}) }} />
                <label className={`grow ${className} text-left h-min w-full focus:outline-none placeholder:italic`}
                htmlFor={`${name}_${i}`}>{item.label}</label>   
            </div>
            )}
        </div>
      </>}
  </>);
};

export const WithLabel = ({ className = "", name = "", label = "", children }) => {
    return (
        <label className={`grow h-min ${className} flex group space-x-2`} htmlFor={name}>
            { label && 
                <span className="space-x-1 group-focus-within:text-dark-sky ">
                    {label}
                </span>
            }
            {children}
        </label>
    );
};

export const InputWithBorder = ({ name = "", label = "", ...rest }) => {
    return (
        <WithLabel className=""
            name={name} label={label}>
            <BaseInput className="px-2 xs:px-4 border-2 rounded-2xl border-dark-sky caret-dark-sky bg-div"
                name={name} {...rest} />
        </WithLabel>
    );
};

export const InputWithButton = ({ className = "", onClick, ...rest }) => {
    return (
        <div className={`${className} flex items-center`}>
          <InputWithBorder {...rest} 
            onEnter={onClick} />

          <ArrowButton 
            onClick={onClick} />
        </div>
    );
};

export const RadioWithButton = ({ className="", onClick = () => {}, ...rest }) => {
    return (
        <div className={`${className} flex space-x-4`}>
            <BaseInput className="flex-col border-b-2 border-dark-sky"
                type="radio" {...rest} />
            <ArrowButton className="" 
                onClick={onClick} />
        </div>
    );
};
