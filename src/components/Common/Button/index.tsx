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
    <button  onClick={onClick} value={value} className={`${className} bg-black text-primary-btn-color  p-2  rounded-md`}>
      {title}{btnicon}
    </button>
  );
};

export default Button;
