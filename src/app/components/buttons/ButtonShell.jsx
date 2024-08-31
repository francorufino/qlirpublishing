import React from "react";

const ButtonShell = ({ children, className = "", ...args }) => {
  return (
    <button
      className={`flex m-auto text-center shadow-lg bg-myellow hover:bg-mblack text-black hover:text-white text-lg font-semibold py-3 px-8 rounded-lg  ${className}`}
      {...args}
    >
      {children}
    </button>
  );
};

export default ButtonShell;
