import React, { useState, useRef, useCallback, useEffect } from 'react';

const Dropdown = ({ className = '', usemouse, children, ...rest }) => {
  const [value, setValue] = useState(false);
  const dropdown = useRef();

  const handleClick = useCallback(() => { setValue(state => !state) }, []);
  const handleEnter = useCallback(() => { if (usemouse) setValue(true) }, [usemouse]);
  const handleLeave = useCallback(() => { if (usemouse) setValue(false) }, [usemouse]);
  const handleClose = useCallback(() => setValue(false), []);

  return (
    <div className="h-full relative self-stretch" ref={dropdown} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button className={`h-full ${className}`} onClick={handleClick} type="button">{children}</button>
      { value && <Menu onClose={handleClose} ref={dropdown} {...rest} />}
    </div>
  );
};

const Menu = React.forwardRef(({ render, onClose }, ref) => {
  const handleClick = useCallback(e => { 
    if (ref && ref.current && !ref.current.contains(e.target)) onClose(false);
  }, [ref, onClose]);

  useEffect(() => {
    document.addEventListener('click', handleClick); 
    return () => document.removeEventListener('click', handleClick);
  }, [handleClick]);

  return render ? render({ value: true, onClose }) : null;
});

export default Dropdown;
