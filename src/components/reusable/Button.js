import React from "react";
import { classNames } from "../../modules/misc";

export const Button = ({ children, className, handleClick }) => {
  return (
    <button
      className={classNames(
        "bg-primary-dark hover:bg-secondary-dark transition-colors text-white rounded-md font-semibold px-4 py-2 my-4 shadow-lg",
        className
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export const PageButton = ({ children, className, ...rest }) => {
  return (
    <button
      type="button"
      className={classNames(
        "relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
