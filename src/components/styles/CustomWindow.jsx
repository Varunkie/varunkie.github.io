export const WindowWithBackground = ({ className = "", children, ...rest }) => {
    return (
        <div className={`h-[80vh] xs:h-[75vh] sm:h-[70vh] lg:h-[65vh] py-4 ${className} flex flex-col items-center mx-auto  select-none pointer-events-none z-10`} {...rest}>
            {children}
        </div>
    );
};

export const WindowWithBorder = ({ className = "", children, ...rest }) => {
    return (
        <div className={`py-6 px-1 sm:px-4 ${className} bg-div flex flex-col relative mx-auto border-t-olive border-b-olive border-t-8 border-b-8 rounded-2xl overflow-hidden z-10`} {...rest}>
            {children}
        </div>
    )
};