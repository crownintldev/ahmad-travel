//@ts-nocheck
"use client";
import Logo from "@/components/Common/Logo";
import Navlink from "@/components/Common/NavLink/Navlink";
import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { FaCcAmazonPay } from "react-icons/fa";
import SearchData from "@/components/Common/SearchData";
import { IoSearchSharp } from "react-icons/io5";
import { Drawer, Modal, Tabs } from "antd";
import Button from "@/components/Common/Button";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import Tab from "@/components/Tabs";
import ServiceData from "@/components/Service/servicedata";
import { HeadingH4, HeadingH6 } from "@/components/Common/Heading";
import { Para14, Para16 } from "@/components/Common/Paragraph";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState([false, false]); // Assuming you have multiple modal

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  }; 
  const onClose = () => {
    setOpen(false);
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleCloseDrawer = () => {
    onClose();
  };
  const handleScroll = () => {
    if (window.scrollY < 5) {
      setScrollingUp(true);
    } else {
      setScrollingUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define the styles for default and scrolled states
  const defaultStyle = "bg-primary-blue500 dark:bg-white/100"; // Full opacity or no blur in dark mode
  const scrolledStyle =
    "bg-primary-blue500/30 backdrop-blur-md dark:bg-white/30 dark:backdrop-blur-md"; // Reduced opacity and blur in dark mode

  const toggleModal = (idx, target) => {
    setIsModalOpen((prevState) => {
      const newState = [...prevState];
      newState[idx] = target;
      return newState;
    });
  };

  return (
    <>
      <nav
        className={` text-black  sticky top-0  z-20 shadow-xl  ${
          scrollingUp ? defaultStyle : scrolledStyle
        }`}
      >
        <div className="container flex justify-between py-4 pt-2 pb-2 ">
          <div className="relative z-10">
            <Logo />
          </div>
          <div className="lg:flex  lg:gap-10 items-center hidden ">
            <Navlink onDropdownClose={closeMobileMenu} />
          </div>
          <div className="flex gap-2">
            <div className="flex items-center justify-center gap-2 md:gap-5">
              <Button
                className="bg-transparent hover:bg-black text-black group hover:text-white"
                onClick={() => toggleModal(0, true)}
                title={
                  <IoSearchSharp
                    className="text-black group-hover:text-white"
                    size={25}
                  />
                }
              />
              <Modal
                open={isModalOpen[0]}
                onOk={() => toggleModal(0, false)}
                onCancel={() => toggleModal(0, false)}
                footer={[]}
                width={1000}
              >
                <SearchData />
              </Modal>
            
              <Link
                className="font-semibold bg-black duration-300 transition text-white py-1 px-2 rounded-md"
                href="/tracking"
              >
                Track Your ID
              </Link>
            </div>
            <div className="lg:hidden mt-[9px]">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center  text-black  rounded-lg p-2 hover:bg-primary-orange-300 hover:text-white transition duration-300"
              >
                {mobileMenuOpen ? (
                  <IoIosArrowUp size={25} className="text-2xl mt-[5px]" />
                ) : (
                  <TbMenu2 size={25} className="text-2xl mt-[5px]" />
                )}
              </button>
              {mobileMenuOpen && (
                <div
                  className={`absolute -z-10 inset-x-0  h-screen origin-top rounded-b-2xl px-6 pb-6 pt-10 bg-white
                    `}
                >
                  <div className="space-y-4  flex-col flex z-50">
                    <Navlink onDropdownClose={closeMobileMenu} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
