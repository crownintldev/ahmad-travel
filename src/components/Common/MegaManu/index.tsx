//@ts-nocheck

import React, { useState, useRef, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { HeadingH6 } from "../Heading";
import MegaData from "../MegaData";

const MegaMenu = ({
  array,
  className,
  text,
  icon,
  onLinkClick,
  textSize = "font-semibold mt-0",
  alignment = "left-0",
  servicecatProp,
  toggleMenu,
  isOpen,
  ...otherProps
}) => {
  const dropdownRef = useRef(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        toggleMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, toggleMenu]);

  const handleLinkClick = () => {
    toggleMenu();
    if (onLinkClick) {
      onLinkClick();
    }
  };

  
  const dropdata = [
    { id: "1", title: "Visa Drop Box", content: <MegaData onLinkClick={handleLinkClick} /> },
    { id: "2", title: "Visa", content: <MegaData onLinkClick={handleLinkClick} /> },
    { id: "3", title: "File Processing", content: <MegaData onLinkClick={handleLinkClick} /> },
  ];

  return (
    <div className={`inline-block  ${textSize}`}>
      <button
        onClick={toggleMenu}
        className={`inline-flex  font-semibold  ${text && text} ${
          icon && icon
        }`}
      >
        {text && text}
        {icon && icon}
      </button>
      {isOpen && (
        <div
          className={`absolute top-0 left-0 lg:top-auto lg:mt-5 xl:mt-4 ${alignment}  z-20   shadow-lg bg-white`}
          ref={dropdownRef}
        >
          <div
            onClick={toggleMenu}
            className="border-2 hover:scale-105 m-2 mt-10 hover:border-primary-orange-300 duration-300 transition rounded-md flex lg:hidden p-2 items-center justify-center w-10"
          >
            <ImCross />
          </div>
          <div
            className="flex gap-1 "
            style={{ width: "100%", maxHeight: "calc(100vh - 65px)" }}
          >
            <div
              className={` ${className}  p-1 overflow-y-scroll lg:max-h-[330px] xl:max-h-[420px] xxl:xl:max-h-max pt-5 w-5/12 md:w-3/12  `}
            >
              {dropdata.map((array, index) => (
                <div
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className={`${
                    activeTab === index ? "active  bg-primary-orange-300 text-white" : ""
                  } p-2 rounded-md mt-2 mb-2 hover:bg-primary-orange-300 hover:text-white transition duration-100`}
                >
                  <HeadingH6 title={array.title} />
                </div>
              ))}
            </div>
            <div
              className={`${className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-9/12 pb-[30vh] p-2 z-30`}
            >
              {dropdata[activeTab].content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
