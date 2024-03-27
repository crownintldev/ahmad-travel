import React from "react";

interface ButtonProps {
  title?: React.ReactNode;
  btnicon?:any;
  className?: string; // Making className optional
  onClick?: () => void;
  value?: any; // Adjusting the type for onClick to match a function that doesn't return anything
}

const Button: React.FC<ButtonProps> = ({
  title,
  btnicon,
  className,
  onClick,
  value,
}) => {
  return (
    <button 
    onClick={onClick} 
    value={value} 
    className={`${
      className ? className + ' ' : ''
    }bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 p-2 rounded-md`}
  >
    {title}
    {btnicon && btnicon}
  </button>
  );
};

export default Button;
