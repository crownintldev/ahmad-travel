"use client"
import Individual from "@/components/Appointment/Individual";
import { HeadingH3, HeadingH6 } from "@/components/Common/Heading";
import { Para14 } from "@/components/Common/Paragraph";
import { addressinfo, isbinfo, karachiinfo } from "@/components/Constant";
import Tab from "@/components/Tabs";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa6";
import { MdMail } from "react-icons/md";


const Address = () => {
  return (
    <>

    <div className="mt-10 md:mt-20 container">
    <Tab  className={"justify-center"}
        tabsData = {[
          {
            key: '1',
            title: 'Rawalpindi Office',
            content: <div className="mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-5 justify-items-center p-5">
            {addressinfo.map((array, index) => (
              <div
                key={index}
                className="rounded-md shadow hover:scale-95 bg-primary-orange-300 hover:bg-primary-orange-400 duration-300 transition text-white p-4 pb-10 space-y-4 relative mt-5 w-full"
              >
                <div className="border flex items-center justify-center shadow rounded-full w-14 h-14 absolute -top-6 -left-4 backdrop-blur-md">
                  {array.icon}
                </div>
                <HeadingH6 title={array.title} />
                <div>
                  <Para14 title={array.des1} />
                  <Para14 title={array.des2} />
                </div>
              </div>
            ))}
          </div>
          </div>,
          },
          {
            key: '2',
            title: 'Islamabad Office',
            content: <div className="mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-5 justify-items-center p-5">
            {isbinfo.map((array, index) => (
              <div
                key={index}
                className="rounded-md shadow hover:scale-95 bg-primary-orange-300 hover:bg-primary-orange-400 duration-300 transition text-white p-4 pb-10 space-y-4 relative mt-5 w-full"
              >
                <div className="border flex items-center justify-center shadow rounded-full w-14 h-14 absolute -top-6 -left-4 backdrop-blur-md">
                  {array.icon}
                </div>
                <HeadingH6 title={array.title} />
                <div>
                  <Para14 title={array.des1} />
                  <Para14 title={array.des2} />
                </div>
              </div>
            ))}
          </div>
          </div>,
          },
          {
            key: '3',
            title: 'Karachi Office',
            content: <div className="mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-5 justify-items-center p-5">
            {karachiinfo.map((array, index) => (
              <div
                key={index}
                className="rounded-md shadow hover:scale-95 bg-primary-orange-300 hover:bg-primary-orange-400 duration-300 transition text-white p-4 pb-10 space-y-4 relative mt-5 w-full"
              >
                <div className="border flex items-center justify-center shadow rounded-full w-14 h-14 absolute -top-6 -left-4 backdrop-blur-md">
                  {array.icon}
                </div>
                <HeadingH6 title={array.title} />
                <div>
                  <Para14 title={array.des1} />
                  <Para14 title={array.des2} />
                </div>
              </div>
            ))}
          </div>
          </div>,
          },
        ]}
      />
    </div>
     


    </>
  );
};

export default Address;
