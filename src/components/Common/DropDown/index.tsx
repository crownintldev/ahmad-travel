import React, { useRef } from 'react';
import Link from 'next/link';
import { HeadingH5 } from '../Heading';

interface DropDownProps {
  array: Array<{
    Category: string;
    items: Array<{
      title: string;
      subtitle: string;
      href: string;
    }>;
  }>;
  text: string;
  icon: JSX.Element;
  onLinkClick: () => void;
  BtnClass: string;
  textSize?: string;
  alignment?: string;
  toggleMenu: () => void;
  isOpen: boolean;
}

const DropDown: React.FC<DropDownProps> = ({
  array,
  text,
  icon,
  onLinkClick,
  BtnClass,
  textSize = 'font-semibold mt-0',
  alignment = 'left-0',
  toggleMenu,
  isOpen,
  ...otherProps
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`inline-block ${textSize}`}>
      <button
        onClick={toggleMenu}
        className={`inline-flex font-semibold ${BtnClass}`}
      >
        {text}
        {icon}
      </button>
      {isOpen && (
        <div
          className={`fixed ${alignment} z-20 rounded-md shadow bg-white`}
        >
          {array.map((arrayItem, index) => (
            <div key={index} ref={dropdownRef}>
              <HeadingH5 className="mb-3" title={arrayItem.Category} />
              {arrayItem.items.map((item, itemIndex) => (
                <div onClick={onLinkClick} key={itemIndex}>
                  <Link href={item.href} key={itemIndex}>
                    <div className="flex gap-3 md:gap-5 justify-between items-center rounded-md hover:bg-primary-orange-300 hover:text-white px-2 py-2">
                      {item.title}
                      <div className="bg-white shadow text-[10px] font-bold text-primary-orange-300 py-1 px-2 rounded-full">
                        {item.subtitle}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;