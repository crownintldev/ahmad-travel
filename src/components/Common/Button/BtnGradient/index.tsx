import React from "react";

interface ButtonGradientProps {
  title?: React.ReactNode;
  btnicon?:any;
  className?: string; // Making className optional
  onClick?: () => void;
  value?: any; // Adjusting the type for onClick to match a function that doesn't return anything
}

const ButtonGradient: React.FC<ButtonGradientProps> = ({
  title,
  btnicon,
  className,
  onClick,
  value,
}) => {
  return (
    <button onClick={onClick} value={value} className={`${className} bg-gradient-to-r from-[#FFEF5E] via-[#EBBD45] to-[#D69A00] hover:from-[#D69A00] hover:via-[#EBBD45] hover:to-[#FFEF5E]  p-2 font-semibold text-[18px]  rounded-md duration-300 transition`}>
      {title}{btnicon}
    </button>
  );
};

export default ButtonGradient;
